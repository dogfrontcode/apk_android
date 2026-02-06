import flet as ft

from services.api import CdtApiClient
from services.storage import LocalStorage
from views.login_view import LoginView

storage = LocalStorage()
api = CdtApiClient()


def main(page: ft.Page):
    page.title = "CDT Clone - Migração Python (Flet)"
    page.theme_mode = ft.ThemeMode.LIGHT
    page.padding = 20
    page.window_width = 420
    page.window_height = 820

    def go(route: str):
        page.go(route)

    def logout(_=None):
        storage.remove("user_data")
        go("/login")

    def render_menu():
        return ft.Column(
            controls=[
                ft.Text("Menu Principal", size=26, weight=ft.FontWeight.BOLD),
                ft.ElevatedButton("Condutor", on_click=lambda _: go("/driver")),
                ft.ElevatedButton("Infrações", on_click=lambda _: go("/infractions")),
                ft.TextButton("Sair", on_click=logout),
            ],
            spacing=12,
            width=420,
        )

    def render_driver():
        user_data = storage.get("user_data", {})
        controle = user_data.get("controle", {}) if isinstance(user_data, dict) else {}

        return ft.Column(
            controls=[
                ft.Text("Condutor", size=26, weight=ft.FontWeight.BOLD),
                ft.Text(f"Nome: {controle.get('nome_completo', '-') }"),
                ft.Text(f"CPF: {controle.get('cpf', '-') }"),
                ft.Text(f"Categoria: {controle.get('categoria', '-') }"),
                ft.Text(f"UF Emissão: {controle.get('local_uf', '-') }"),
                ft.Text(f"Validade: {controle.get('data_expiracao', '-') }"),
                ft.ElevatedButton("Voltar", on_click=lambda _: go("/menu")),
            ],
            spacing=8,
            width=420,
        )

    def render_infractions():
        return ft.Column(
            controls=[
                ft.Text("Infrações", size=26, weight=ft.FontWeight.BOLD),
                ft.ListTile(title=ft.Text("Por Infrator"), leading=ft.Icon(ft.Icons.BADGE_OUTLINED)),
                ft.ListTile(title=ft.Text("Por Veículo"), leading=ft.Icon(ft.Icons.DIRECTIONS_CAR_OUTLINED)),
                ft.ElevatedButton("Voltar", on_click=lambda _: go("/menu")),
            ],
            spacing=8,
            width=420,
        )

    def try_login(cpf: str, senha: str):
        if not cpf or not senha:
            login_view.feedback.value = "Preencha CPF e senha."
            page.update()
            return

        try:
            payload = api.login(cpf, senha)
            cnh = payload.get("cnh") if isinstance(payload, dict) else None
            if not cnh:
                raise RuntimeError("Resposta inválida da API: campo 'cnh' ausente")

            storage.set("user_data", cnh)
            go("/menu")
        except Exception as exc:
            login_view.feedback.value = str(exc)
            page.update()

    login_view = LoginView(on_login=try_login)

    def route_change(_):
        page.views.clear()

        user_data = storage.get("user_data")
        route = page.route
        if route == "/":
            route = "/menu" if user_data else "/login"

        if route == "/login":
            page.views.append(
                ft.View(route="/login", controls=[ft.Container(content=login_view, alignment=ft.alignment.center)])
            )

        elif route == "/menu":
            if not user_data:
                go("/login")
                return
            page.views.append(ft.View(route="/menu", controls=[render_menu()]))

        elif route == "/driver":
            if not user_data:
                go("/login")
                return
            page.views.append(ft.View(route="/driver", controls=[render_driver()]))

        elif route == "/infractions":
            if not user_data:
                go("/login")
                return
            page.views.append(ft.View(route="/infractions", controls=[render_infractions()]))

        else:
            page.views.append(
                ft.View(
                    route=route,
                    controls=[
                        ft.Text("Página não encontrada"),
                        ft.ElevatedButton("Ir para login", on_click=lambda _: go("/login")),
                    ],
                )
            )

        page.update()

    page.on_route_change = route_change
    go("/")


if __name__ == "__main__":
    ft.app(target=main)

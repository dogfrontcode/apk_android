from typing import Callable

import flet as ft


class LoginView(ft.Column):
    def __init__(self, on_login: Callable[[str, str], None]) -> None:
        self.cpf = ft.TextField(label="CPF", keyboard_type=ft.KeyboardType.NUMBER)
        self.senha = ft.TextField(label="Senha", password=True, can_reveal_password=True)
        self.feedback = ft.Text(value="", color=ft.Colors.RED_600)

        super().__init__(
            controls=[
                ft.Text("Entrar com gov.br", size=26, weight=ft.FontWeight.BOLD),
                self.cpf,
                self.senha,
                ft.ElevatedButton("Entrar", on_click=lambda _: on_login(self.cpf.value.strip(), self.senha.value)),
                self.feedback,
            ],
            spacing=14,
            width=420,
        )

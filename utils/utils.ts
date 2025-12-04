
export function formatCpf(cpf: string): string {
  let cleanCpf = cpf.replace(/\D/g, '');

  if (cleanCpf.length > 9) {
    cleanCpf = cleanCpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4');
  } else if (cleanCpf.length > 6) {
    cleanCpf = cleanCpf.replace(/^(\d{3})(\d{3})(\d{3})$/, '$1.$2.$3');
  } else if (cleanCpf.length > 3) {
    cleanCpf = cleanCpf.replace(/^(\d{3})(\d{3})$/, '$1.$2');
  } else if (cleanCpf.length > 0) {
    cleanCpf = cleanCpf.replace(/^(\d{3})$/, '$1');
  }

  return cleanCpf;
}


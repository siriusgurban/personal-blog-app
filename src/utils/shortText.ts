export function shortText(text: string, size: number) {
  return text?.length> size ? `${text?.slice(0, size)}...` : text;
}

export function countDate(): string {
  let resultDate: string = '';
  const date: any = new Date();
  return resultDate = date.toUTCString().replace('GMT', '').trim();
}

export const fallenImages = new Map<string, string[]>()
function importAll(r: any) {
  r.keys().forEach((k: string) => {
    const name = k.split('/')[1]
    const personImages = fallenImages.get(name) || []
    personImages.push(r(k).default)
    fallenImages.set(name, personImages)
  });
}

importAll(require.context('../resources/images/fallen', true, /.*/));

// loaded from google sheets in People.tsx
const data: any = []

export default data
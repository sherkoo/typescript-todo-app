class Button {
  constructor(private onClick: () => void, private label: string) {}

  render() {
    return `
      <button onclick="${this.onClick}">${this.label}</button>
    `;
  }
}

export default Button;
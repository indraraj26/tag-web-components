import { Component, Prop, h, Host, EventEmitter, Event } from '@stencil/core';

@Component({
  tag: 'tag-component',
  styleUrl: 'tag-component.css',
  shadow: true,
})
export class MyComponent {
  tagContainerEl!: HTMLElement;

  @Prop() name!: string;
  @Prop() closeIcon?: boolean;
  @Prop() type?: string;

  @Event() close: EventEmitter;

  private onCloseHandler(el: HTMLElement) {
    // console.log(el, 'ev')
    this.close.emit(el);
  }

  private styleCondition() : {[key: string]: any}{
    return this.type === 'rounded' && {borderRadius: "10px"};
  }

  render() {
    return (<Host>
      <div class="tag-container" ref={(el) => this.tagContainerEl = el} style={this.styleCondition()}>
          <slot name="item-start" />
          {this.name}
          <slot name="item-end" />
          {this.closeIcon && <span class="tag-close-icon" onClick={ev => this.onCloseHandler(this.tagContainerEl)}>x</span>}
      </div>
      </Host>);
  }
}

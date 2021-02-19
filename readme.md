# Tag Web Components @Indraraj26
    
## @Screenshot
<img src="https://github.com/indraraj26/tag-web-components/blob/main/assets/screenshot.PNG?raw=true" alt="tag-web-components" />

## @Props
- name - {String} - tag name
- close-icon - {Boolean} - show/hide close icon
- type - {String} - default: square, rounded
    
## @Event
- close - {EventListener} - give the tag element</li>
    
## @Style properties
- --tag-close-icon-color: red
- --tag-background-color: #5680F9
- --tag-text-color: #ececec
- --tag-font-size: 14px
      
## @Usage
```
<tag-component name="Primary Tag" close-icon="true" type="rounded"
         style="--tag-close-icon-color: red;
                --tag-background-color: #4C36DD;
                --tag-text-color: #ececec">

             <!--  <span slot="item-start">Icon1</span>
              <span slot="item-end">Icon2</span> -->

</tag-component>
```
```
const tagComponentList = document.querySelectorAll('tag-component');
  for(let tagComponent of tagComponentList) {
    tagComponent.addEventListener('close', event => {
     console.log('event in js', event.target.remove())
   })
  }
```
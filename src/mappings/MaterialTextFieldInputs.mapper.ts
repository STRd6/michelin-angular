import {
  figmaMapping,
  type BaseFigmaProps,
  html,
} from '@builder.io/dev-tools/figma';
import { MatInput } from '../app/builder-registry';

// ❖ Material Text field / Inputs
interface FigmaMaterialTextFieldInputsProps extends BaseFigmaProps {
  'Label text'?: string;
  'Show supporting text'?: boolean;
  'Input text'?: string;
  'Trailing Icon'?: boolean;
  Text?: string;
  Style?: 'Filled' | 'Outlined';
  State?: 'Enabled' | 'Hovered' | 'Focused' | 'Error' | 'Disabled';
  'Text configurations'?: 'Input text' | 'Label text' | 'Placeholder text';
  'Leading icon'?: 'False' | 'True';
}

// Notice this is a scaffolded mapping, you should update the code to fit the actual component
// Read more at https://www.builder.io/c/docs/mapping-functions
figmaMapping({
  componentKey: 'bd2cf834e93feae86fca05add7d1075eeb6dc020',
  mapper(figma: FigmaMaterialTextFieldInputsProps) {
    // Extract core properties
    const labelText = figma['Label text'] ?? '';
    const inputText = figma['Input text'] ?? '';

    return html`
      <my-mat-input
        $cmp=${MatInput}
        labelText="${labelText}"
        value=${inputText}
        type=${
          //@ts-ignore
          figma.$rawNode.absoluteBoundingBox.height > 100 ? 'textarea' : 'text'
        }
      />
    `;
  },
});

// Notice this is a scaffolded mapping, you should update the code to fit the actual component
// Read more at https://www.builder.io/c/docs/mapping-functions
figmaMapping({
  componentKey: '53d97bed840df25f08c32bfb828599339236dead',
  mapper(figma: FigmaMaterialTextFieldInputsProps) {
    // Extract core properties
    const labelText = figma['Label text'] ?? '';
    const inputText = figma['Input text'] ?? '';

    // Map state to input properties
    const isDisabled = figma.State === 'Disabled';
    const hasError = figma.State === 'Error';

    // Generate CSS classes
    const styleClass = figma.Style?.toLowerCase() ?? 'filled';
    const stateClass = figma.State?.toLowerCase() ?? 'enabled';

    return html` <my-mat-input
      $cmp=${MatInput}
      labelText="${labelText}"
      value=${inputText}
      type=${
        //@ts-ignore
        figma.$rawNode.absoluteBoundingBox.height > 100 ? 'textarea' : 'text'
      }
    />`;
  },
});

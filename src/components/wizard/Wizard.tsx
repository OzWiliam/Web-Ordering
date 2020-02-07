import React from 'react';
import './Wizard.scss';
import StepWizard from 'react-step-wizard';
import Menu from '../Menu/Menu';
import Order from '../Order/Order';

export interface WizardProps {
  name: string;
}

export interface WizardState {
  name: string;
  orderTable: number;
  currentStep: number;
  nameFood: string;
}

export default class Wizard extends React.Component<WizardProps, WizardState> {
  constructor(props: WizardProps) {
    super(props);
    this.onStepChange = this.onStepChange.bind(this);
    this._next = this._next.bind(this);
    this.state = {
      name: null,
      currentStep: 1,
      orderTable: null,
      nameFood: null
    };
  }

  _next = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep >= 2 ? 3 : currentStep + 1;
    console.log(currentStep, 'next');
    this.setState({
      currentStep: currentStep
    });
  };

  _prev = () => {
    let currentStep = this.state.currentStep;
    // If the current step is 2 or 3, then subtract one on "previous" button click
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep
    });
  };

  onSelectTableNumber(tableNumber: number) {
    console.log('onSelectTableNumber: ' + tableNumber);
    // console.log(this.nextStep());
  }

  render() {
    return (
      <div>
        <div className="body-content">
          <StepWizard onStepChange={this.onStepChange}>
            <Order
              currentStep={this.state.currentStep}
              handleChange={this.onSelectTableNumber}
            ></Order>
            <Menu
              currentStep={this.state.currentStep}
              orderTable={this.state.orderTable}
            />
          </StepWizard>
        </div>
      </div>
    );
  }

  onStepChange = (stats: { step: number }) => {
    console.log(stats + ' demo');
  };
}

// function Step1(props) {
//   if (props.currentStep !== 1) {
//     return null
//   }
//   return(
//     <Order numberOrder={1} callBack={this.demo}  ></Order>
//     );
// }

/*

class First extends React.Component {
    update = (e: any) => {
        this.props.update(e.target.name, e.target.value);
    }

    render() {
        return (
            <div>
                <h3 className='text-center'>Welcome! Have a look around!</h3>

                <label>First Name</label>
                <input type='text' className='form-control' name='firstname' placeholder='First Name'
                    onChange={this.update} />
                <Stats step={1} {...this.props} />
            </div>
        );
    }
}

class Second extends Component {
    validate = () => {
        if (confirm('Are you sure you want to go back?')) { // eslint-disable-line
            this.props.previousStep();
        }
    }

    render() {
        return (
            <div>
                { this.props.form.firstname && <h3>Hey {this.props.form.firstname}! 👋</h3> }
                I've added validation to the previous button.
                <Stats step={2} {...this.props} previousStep={this.validate} />
            </div>
        );
    }
}
*/

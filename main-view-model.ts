import { Observable } from '@nativescript/core';

export class HelloWorldModel extends Observable {
  private _threatType: string = '';
  private _location: string = '';
  private _description: string = '';
  private _urgencyLevels: string[] = ['Low', 'Medium', 'High', 'Critical'];
  private _selectedUrgencyIndex: number = 0;
  private _statusMessage: string = '';

  constructor() {
    super();
  }

  get threatType(): string {
    return this._threatType;
  }

  set threatType(value: string) {
    if (this._threatType !== value) {
      this._threatType = value;
      this.notifyPropertyChange('threatType', value);
    }
  }

  get location(): string {
    return this._location;
  }

  set location(value: string) {
    if (this._location !== value) {
      this._location = value;
      this.notifyPropertyChange('location', value);
    }
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    if (this._description !== value) {
      this._description = value;
      this.notifyPropertyChange('description', value);
    }
  }

  get urgencyLevels(): string[] {
    return this._urgencyLevels;
  }

  get selectedUrgencyIndex(): number {
    return this._selectedUrgencyIndex;
  }

  set selectedUrgencyIndex(value: number) {
    if (this._selectedUrgencyIndex !== value) {
      this._selectedUrgencyIndex = value;
      this.notifyPropertyChange('selectedUrgencyIndex', value);
    }
  }

  get statusMessage(): string {
    return this._statusMessage;
  }

  set statusMessage(value: string) {
    if (this._statusMessage !== value) {
      this._statusMessage = value;
      this.notifyPropertyChange('statusMessage', value);
    }
  }

  onSubmitReport() {
    if (!this.threatType || !this.location || !this.description) {
      this.statusMessage = 'Please fill in all fields';
      return;
    }

    // Here you would typically send the data to a server
    console.log('Submitting report:', {
      threatType: this.threatType,
      location: this.location,
      description: this.description,
      urgency: this.urgencyLevels[this.selectedUrgencyIndex]
    });

    this.statusMessage = 'Report submitted successfully!';
    
    // Clear the form
    this.threatType = '';
    this.location = '';
    this.description = '';
    this.selectedUrgencyIndex = 0;

    // Clear success message after 3 seconds
    setTimeout(() => {
      this.statusMessage = '';
    }, 3000);
  }
}
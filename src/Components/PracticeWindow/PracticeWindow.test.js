import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import testWrapper from '../../Helpers/testComponentMountWrapper';
import PracticeWindow from './PracticeWindow';

describe('PracticeWindow', () => {
  let mountedPracticeWindow;

  beforeEach(() => {
    mountedPracticeWindow = undefined;
    jest.clearAllMocks();
  });
  const props = {
    closeExerciseWindow: jest.fn(),
  };

  it('matches to snapshot', () => {
    expect(testWrapper(PracticeWindow, props, true)).toMatchSnapshot();
  });

  describe('when `windowState.case` is empty', () => {
    beforeEach(() => {
      mountedPracticeWindow = testWrapper(PracticeWindow, props);
    });

    it('does not render anything', () => {
      const divContainer = mountedPracticeWindow.find('.practiceWindow_container');
      expect(divContainer.exists()).toEqual(false);
    });
  });

  describe('when something is rendered', () => {
    beforeEach(() => {
      props.windowState = {
        case: 'flashcard',
        data: { word: 'someData', url: ['No Img Available'] },
      };
      mountedPracticeWindow = testWrapper(PracticeWindow, props);
    });

    it.skip('calls the closeExerciseWindow prop when clicking outside', () => {
      const map = {};

      document.addEventListener = jest.fn((event, cb) => {
        map[event] = cb;
      });
      const wrapper = mount(
        <div>
          <div id="ciao" />
          <PracticeWindow {...props} />
        </div>,
      );
      map.mousedown({
        target: ReactDOM.findDOMNode(wrapper.find('#ciao').instance()),
      });
      expect(props.closeExerciseWindow).toHaveBeenCalled();
    });

    it.skip('does not call the closeExerciseWindow prop when clicking inside', () => {
      const map = {};

      document.addEventListener = jest.fn((event, cb) => {
        map[event] = cb;
      });
      const wrapper = mount(<PracticeWindow {...props} />);
      map.mousedown({
        target: ReactDOM.findDOMNode(wrapper.instance()),
      });
      expect(props.closeExerciseWindow).not.toHaveBeenCalled();
    });

    describe('when a windowState object is passed with key `case` = `flashcard`', () => {
      let flashcardComponent;
      beforeEach(() => {
        props.windowState = {
          case: 'flashcard',
          data: { word: 'someData', url: ['No Img Available'] },
        };
        mountedPracticeWindow = testWrapper(PracticeWindow, props);
        flashcardComponent = mountedPracticeWindow
          .find('Flashcard');
      });

      it('renders a Flashcard component', () => {
        expect(flashcardComponent.exists()).toEqual(true);
      });

      it('passes `data` key reference to the Flashcard component', () => {
        expect(flashcardComponent.props().data).toEqual({ word: 'someData', url: ['No Img Available'] });
      });
    });

    describe('when a windowState object is passed with key `case` = `list', () => {
      beforeEach(() => {
        props.windowState = {
          case: 'list',
          data: { word: 'someData', url: ['No Img Available'] },
        };
        mountedPracticeWindow = testWrapper(PracticeWindow, props);
      });

      it('renders a composed ExerciseSettingsPanel component', () => {
        const panelComponent = mountedPracticeWindow
          .find('ExerciseSettingsPanel');
        expect(panelComponent.exists()).toEqual(true);
      });

      it('passes `data` key reference to the ExerciseSettingsPanel component', () => {
        const panelComponent = mountedPracticeWindow
          .find('ExerciseSettingsPanel');
        expect(panelComponent.props().data).toEqual(props.windowState.data);
      });
    });
  });
});

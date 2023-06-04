
import BasicButton from '../components/atom/button/BasicButton';
import {ButtonSize, ButtonTheme} from "../components/atom/button/StyledButton";
import {Meta, StoryObj} from "@storybook/react";

// 어떤 컴포넌트의 story인지, 어떤 설정으로 렌더링할지 정의
const meta = {
  title: 'stories/Button',
  component: BasicButton,
  tags: ['autodocs'],

} satisfies Meta<typeof BasicButton>;

//아래 형태로 컴포넌트 story 렌더 가능
type Story = StoryObj<typeof meta>;
export default meta;


export const Primary: Story = {
  args: {
    theme: ButtonTheme.PRIMARY,
    size: ButtonSize.MIDDLE,
  }
}

export const Secondary: Story = {
  args: {
    theme: ButtonTheme.SECONDARY,
    size: ButtonSize.MIDDLE,
  }
}

export const Large: Story = {
  args: {
    theme: ButtonTheme.PRIMARY,
    size: ButtonSize.LARGE,
  }
}

export const Middle: Story = {
  args: {
    theme: ButtonTheme.PRIMARY,
    size: ButtonSize.MIDDLE,
  }
}

export const Small: Story = {
  args: {
    theme: ButtonTheme.PRIMARY,
    size: ButtonSize.SMALL,
  }
}

export const Icon: Story = {
  args: {
    theme: ButtonTheme.MINOR,
    size: ButtonSize.ICON,
  }
}

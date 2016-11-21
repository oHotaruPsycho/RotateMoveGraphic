//=============================================================================
// Sprite_Character メソッド拡張
//=============================================================================
Sprite_Character.prototype.update = function() {
    Sprite_Base.prototype.update.call(this);
    this.updateBitmap();
    this.updateFrame();
    this.updatePosition();
    this.updateAnimation();
    this.updateBalloon();
    this.updateOther();
    //==追加分:START==
    if(this._character instanceof Game_Event && 
        this._character.eventId() > 0 && 
        $dataMap.events[this._character.eventId()].meta && 
        $dataMap.events[this._character.eventId()].meta.rotate){
        this.rotation = Number($dataMap.events[this._character.eventId()].meta.rotate) * Math.PI / 180;
        if($dataMap.events[this._character.eventId()].meta.completionX){
            this.x += Number($dataMap.events[this._character.eventId()].meta.completionX);
        }
        if($dataMap.events[this._character.eventId()].meta.completionY){
            this.y += Number($dataMap.events[this._character.eventId()].meta.completionY);
        }
    }
    //==追加分:END==
};
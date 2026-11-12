# Engine: LunaChessEngine

Author: Daniele Marpino

Home: https://github.com/Spunc595/Luna-Chess-Engine

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.2.0 | 2026-11-04 | 2820<sub>(+19) | 3182<sub>(-8) | 3312<sub>(+60) |  |
| 4.1.1 | 2026-11-02 | 2801<sub>(-2) | 3190<sub>(+16) | 3252<sub>(-11) |  |
| 4.1.0 | 2026-10-16 | 2803 | 3174 | 3263 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.2.0 | 2026-11-04 | 2942<sub>(+17) | 3305<sub>(+26) | 3397<sub>(+21) |  |
| 4.1.1 | 2026-11-02 | 2925<sub>(+44) | 3279<sub>(-26) | 3376<sub>(-15) |  |
| 4.1.0 | 2026-10-16 | 2881 | 3305 | 3391 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.1.0 | 2026-10-16 | 2881 | 3305 | 3391 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+LunaChessEngine+<version>&body=###%20Engine%20name%0ALunaChessEngine%0A%0A###%20Version%0A4.2.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU for P1: Intel(R) Core(TM) Ultra 7 265T (1.50 GHz) - P-Core<br>
CPU for E1: Intel(R) Core(TM) Ultra 7 265T (1.50 GHz) - E-Core<br>
CPU for T1: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-11-12 05:39:43

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.1.0", "4.1.1", "4.2.0"]
  y-axis "Elo Rating" 2800 --> 3400
  line "E1: STC (8.0+0.08s)" [2803, 2801, 2820]
  line "E1: LTC (60.0+0.60s)" [3174, 3190, 3182]
  line "E1: VLTC (2m24s+1.12s)" [3263, 3252, 3312]
  line "P1: STC (8.0+0.08s)" [2881, 2925, 2942]
  line "P1: LTC (60.0+0.60s)" [3305, 3279, 3305]
  line "P1: VLTC (2m24s+1.12s)" [3391, 3376, 3397]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3397 | 37 | 180 | 49% | 3402 | 69% |
|  |  | E1 | 3312 | 26 | 384 | 49% | 3321 | 67% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3305 | 40 | 164 | 48% | 3314 | 62% |
|  |  | E1 | 3182 | 33 | 242 | 51% | 3177 | 60% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2942 | 42 | 172 | 47% | 2971 | 40% |
|  |  | E1 | 2820 | 35 | 250 | 49% | 2827 | 40% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3376 | 38 | 188 | 52% | 3362 | 59% |
|  |  | E1 | 3252 | 34 | 232 | 49% | 3258 | 58% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3279 | 43 | 158 | 55% | 3241 | 46% |
|  |  | E1 | 3190 | 39 | 172 | 50% | 3187 | 59% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2925 | 50 | 128 | 55% | 2876 | 36% |
|  |  | E1 | 2801 | 36 | 240 | 49% | 2812 | 38% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3263 | 32 | 280 | 56% | 3186 | 55% |
|  |  | P1 | 3391 | 38 | 190 | 52% | 3347 | 60% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3174 | 33 | 294 | 58% | 3023 | 45% |
|  |  | P1 | 3305 | 42 | 174 | 56% | 3135 | 48% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2881 | 38 | 240 | 54% | 2708 | 35% |
|  |  | E1 | 2803 | 34 | 298 | 57% | 2570 | 36% |
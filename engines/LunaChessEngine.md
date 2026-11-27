# Engine: LunaChessEngine

Author: Daniele Marpino

Home: https://github.com/Spunc595/Luna-Chess-Engine

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.2.0 | 2026-11-04 | 2780<sub>(+29) | 3128<sub>(-23) | 3255<sub>(+47) |  |
| 4.1.1 | 2026-11-02 | 2751<sub>(-10) | 3151<sub>(+26) | 3208<sub>(-5) |  |
| 4.1.0 | 2026-10-16 | 2761 | 3125 | 3213 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.2.0 | 2026-11-04 | 2808<sub>(+15) | 3124<sub>(+16) | 3216<sub>(+30) |  |
| 4.1.1 | 2026-11-02 | 2793<sub>(+50) | 3108<sub>(-21) | 3186<sub>(-22) |  |
| 4.1.0 | 2026-10-16 | 2743 | 3129 | 3208 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.1.0 | 2026-10-16 | 2743 | 3129 | 3208 |  |
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

Generated: 2026-11-27 05:40:17

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.1.0", "4.1.1", "4.2.0"]
  y-axis "Elo Rating" 2700 --> 3300
  line "E1: STC (8.0+0.08s)" [2761, 2751, 2780]
  line "E1: LTC (60.0+0.60s)" [3125, 3151, 3128]
  line "E1: VLTC (2m24s+1.12s)" [3213, 3208, 3255]
  line "P1: STC (8.0+0.08s)" [2743, 2793, 2808]
  line "P1: LTC (60.0+0.60s)" [3129, 3108, 3124]
  line "P1: VLTC (2m24s+1.12s)" [3208, 3186, 3216]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3255 | 25 | 410 | 48% | 3268 | 69% |
|  |  | P1 | 3216 | 36 | 196 | 49% | 3222 | 68% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3128 | 31 | 274 | 50% | 3129 | 60% |
|  |  | P1 | 3124 | 35 | 212 | 48% | 3141 | 61% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2808 | 37 | 228 | 48% | 2828 | 40% |
|  |  | E1 | 2780 | 32 | 320 | 48% | 2780 | 37% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3186 | 36 | 212 | 50% | 3191 | 58% |
|  |  | E1 | 3208 | 32 | 260 | 51% | 3205 | 59% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3108 | 37 | 206 | 52% | 3094 | 51% |
|  |  | E1 | 3151 | 37 | 192 | 51% | 3144 | 60% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2793 | 42 | 182 | 52% | 2773 | 36% |
|  |  | E1 | 2751 | 33 | 296 | 48% | 2769 | 38% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3208 | 38 | 190 | 52% | 3168 | 60% |
|  |  | E1 | 3213 | 32 | 280 | 56% | 3136 | 55% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3129 | 42 | 174 | 56% | 2973 | 48% |
|  |  | E1 | 3125 | 33 | 294 | 58% | 2975 | 45% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2743 | 38 | 240 | 54% | 2583 | 35% |
|  |  | E1 | 2761 | 34 | 298 | 57% | 2530 | 36% |
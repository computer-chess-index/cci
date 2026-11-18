# Engine: LunaChessEngine

Author: Daniele Marpino

Home: https://github.com/Spunc595/Luna-Chess-Engine

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.2.0 | 2026-11-04 | 2770<sub>(+13) | 3133<sub>(-22) | 3259<sub>(+55) |  |
| 4.1.1 | 2026-11-02 | 2757<sub>(-1) | 3155<sub>(+28) | 3204<sub>(-9) |  |
| 4.1.0 | 2026-10-16 | 2758 | 3127 | 3213 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.2.0 | 2026-11-04 | 2773<sub>(+5) | 3098<sub>(+17) | 3187<sub>(+31) |  |
| 4.1.1 | 2026-11-02 | 2768<sub>(+49) | 3081<sub>(-21) | 3156<sub>(-26) |  |
| 4.1.0 | 2026-10-16 | 2719 | 3102 | 3182 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.1.0 | 2026-10-16 | 2719 | 3102 | 3182 |  |
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

Generated: 2026-11-18 05:40:25

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.1.0", "4.1.1", "4.2.0"]
  y-axis "Elo Rating" 2700 --> 3300
  line "E1: STC (8.0+0.08s)" [2758, 2757, 2770]
  line "E1: LTC (60.0+0.60s)" [3127, 3155, 3133]
  line "E1: VLTC (2m24s+1.12s)" [3213, 3204, 3259]
  line "P1: STC (8.0+0.08s)" [2719, 2768, 2773]
  line "P1: LTC (60.0+0.60s)" [3102, 3081, 3098]
  line "P1: VLTC (2m24s+1.12s)" [3182, 3156, 3187]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3187 | 36 | 196 | 49% | 3194 | 68% |
|  |  | E1 | 3259 | 25 | 396 | 48% | 3270 | 68% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3098 | 39 | 176 | 48% | 3114 | 60% |
|  |  | E1 | 3133 | 32 | 258 | 50% | 3131 | 59% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2773 | 40 | 196 | 46% | 2803 | 40% |
|  |  | E1 | 2770 | 34 | 280 | 47% | 2777 | 39% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3156 | 36 | 212 | 50% | 3162 | 58% |
|  |  | E1 | 3204 | 33 | 248 | 50% | 3205 | 59% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3081 | 40 | 180 | 53% | 3063 | 48% |
|  |  | E1 | 3155 | 38 | 188 | 51% | 3146 | 60% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2757 | 35 | 264 | 49% | 2768 | 37% |
|  |  | P1 | 2768 | 44 | 166 | 52% | 2747 | 36% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3182 | 38 | 190 | 52% | 3143 | 60% |
|  |  | E1 | 3213 | 32 | 280 | 56% | 3137 | 55% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3102 | 42 | 174 | 56% | 2947 | 48% |
|  |  | E1 | 3127 | 33 | 294 | 58% | 2977 | 45% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2719 | 38 | 240 | 54% | 2561 | 35% |
|  |  | E1 | 2758 | 34 | 298 | 57% | 2527 | 36% |
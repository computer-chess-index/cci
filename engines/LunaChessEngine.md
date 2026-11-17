# Engine: LunaChessEngine

Author: Daniele Marpino

Home: https://github.com/Spunc595/Luna-Chess-Engine

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.2.0 | 2026-11-04 | 2780<sub>(+18) | 3139<sub>(-21) | 3266<sub>(+57) |  |
| 4.1.1 | 2026-11-02 | 2762<sub>(-1) | 3160<sub>(+28) | 3209<sub>(-9) |  |
| 4.1.0 | 2026-10-16 | 2763 | 3132 | 3218 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.2.0 | 2026-11-04 | 2765<sub>(+4) | 3092<sub>(+18) | 3181<sub>(+31) |  |
| 4.1.1 | 2026-11-02 | 2761<sub>(+47) | 3074<sub>(-22) | 3150<sub>(-25) |  |
| 4.1.0 | 2026-10-16 | 2714 | 3096 | 3175 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.1.0 | 2026-10-16 | 2714 | 3096 | 3175 |  |
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

Generated: 2026-11-17 05:40:06

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.1.0", "4.1.1", "4.2.0"]
  y-axis "Elo Rating" 2700 --> 3300
  line "E1: STC (8.0+0.08s)" [2763, 2762, 2780]
  line "E1: LTC (60.0+0.60s)" [3132, 3160, 3139]
  line "E1: VLTC (2m24s+1.12s)" [3218, 3209, 3266]
  line "P1: STC (8.0+0.08s)" [2714, 2761, 2765]
  line "P1: LTC (60.0+0.60s)" [3096, 3074, 3092]
  line "P1: VLTC (2m24s+1.12s)" [3175, 3150, 3181]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3181 | 36 | 192 | 49% | 3187 | 69% |
|  |  | E1 | 3266 | 25 | 396 | 48% | 3276 | 68% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3092 | 39 | 176 | 48% | 3108 | 60% |
|  |  | E1 | 3139 | 32 | 258 | 50% | 3137 | 59% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2765 | 40 | 188 | 46% | 2799 | 40% |
|  |  | E1 | 2780 | 34 | 276 | 48% | 2784 | 39% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3150 | 36 | 212 | 50% | 3155 | 58% |
|  |  | E1 | 3209 | 33 | 248 | 50% | 3212 | 59% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3074 | 40 | 180 | 53% | 3055 | 48% |
|  |  | E1 | 3160 | 38 | 188 | 51% | 3151 | 60% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2761 | 44 | 166 | 52% | 2741 | 36% |
|  |  | E1 | 2762 | 35 | 264 | 49% | 2773 | 37% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3175 | 38 | 190 | 52% | 3136 | 60% |
|  |  | E1 | 3218 | 32 | 280 | 56% | 3143 | 55% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3096 | 42 | 174 | 56% | 2940 | 48% |
|  |  | E1 | 3132 | 33 | 294 | 58% | 2982 | 45% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2714 | 38 | 240 | 54% | 2554 | 35% |
|  |  | E1 | 2763 | 34 | 298 | 57% | 2534 | 36% |
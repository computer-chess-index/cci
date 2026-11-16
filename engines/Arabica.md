# Engine: Arabica

Author: Genio Mo

Home: https://github.com/geniomdev/arabica-chess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.4.7 | 2026-11-11 | 2886<sub>(+59) | 3133<sub>(-30) | 3279<sub>(+1) |  |
| 0.4.1 | 2026-11-01 | 2827 | 3163 | 3278 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.4.7 | 2026-11-11 | 2790<sub>(+8) | 3178<sub>(+22) | 3240<sub>(+28) |  |
| 0.4.1 | 2026-11-01 | 2782 | 3156 | 3212 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.4.1 | 2026-11-01 | 2782 | 3156 | 3212 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Arabica+<version>&body=###%20Engine%20name%0AArabica%0A%0A###%20Version%0A0.4.7" target="_blank">Submit new version</a>

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

Generated: 2026-11-16 05:35:49

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.4.1", "0.4.7"]
  y-axis "Elo Rating" 2700 --> 3300
  line "E1: STC (8.0+0.08s)" [2827, 2886]
  line "E1: LTC (60.0+0.60s)" [3163, 3133]
  line "E1: VLTC (2m24s+1.12s)" [3278, 3279]
  line "P1: STC (8.0+0.08s)" [2782, 2790]
  line "P1: LTC (60.0+0.60s)" [3156, 3178]
  line "P1: VLTC (2m24s+1.12s)" [3212, 3240]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.4.7 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3279 | 81 | 40 | 49% | 3293 | 58% |
|  |  | P1 | 3240 | 157 | 12 | 42% | 3309 | 33% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3178 | 125 | 16 | 47% | 3200 | 56% |
|  |  | E1 | 3133 | 79 | 44 | 45% | 3167 | 50% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2790 | 105 | 24 | 48% | 2804 | 54% |
|  |  | E1 | 2886 | 84 | 44 | 52% | 2866 | 32% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3212 | 34 | 236 | 51% | 3186 | 57% |
|  |  | E1 | 3278 | 32 | 266 | 51% | 3259 | 57% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3156 | 35 | 236 | 53% | 3098 | 53% |
|  |  | E1 | 3163 | 29 | 354 | 56% | 3087 | 54% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2782 | 38 | 220 | 53% | 2728 | 38% |
|  |  | E1 | 2827 | 30 | 380 | 57% | 2724 | 33% |
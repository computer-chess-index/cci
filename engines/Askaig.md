# Engine: Askaig

Author: Nguyen Van Thang

Home: https://github.com/sophiathedev/askaig

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 20260811 | 2026-08-11 | 3002<sub>(-18) | 3272<sub>(+62) | 3290<sub>(+32) |  |
| 20260704 | 2026-07-04 | 3020<sub>(+613) | 3210<sub>(+538) | 3258<sub>(+535) |  |
| 20260628 | 2026-06-28 | 2407<sub>(-1) | 2672<sub>(+22) | 2723<sub>(-22) |  |
| 20260616 | 2026-06-16 | 2408<sub>(+new) | 2650<sub>(+new) | 2745<sub>(+new) |  |
| 20260615 | 2026-06-15 |  |  |  |  |
| 20260614 | 2026-06-14 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Askaig+<version>&body=###%20Engine%20name%0AAskaig%0A%0A###%20Version%0A20260811" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-08 04:35:58

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["20260616", "20260628", "20260704", "20260811"]
  y-axis "Elo Rating" 2400 --> 3300
  line "" [2408, 2407, 3020, 3002]
  line "STC (8.0+0.08s)" [2408, 2407, 3020, 3002]
  line "LTC (60.0+0.60s)" [2650, 2672, 3210, 3272]
  line "" [2745, 2723, 3258, 3290]
  line "VLTC (2m24s+1.12s)" [2745, 2723, 3258, 3290]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 20260811 | VLTC <sub>(2m24s+1.12s)</sub> | 3290 | 31 | 298 | 50% | 3291 | 53% |
| 20260811 | LTC <sub>(60.0+0.60s)</sub> | 3272 | 29 | 344 | 50% | 3272 | 49% |
| 20260811 | STC <sub>(8.0+0.08s)</sub> | 3002 | 29 | 380 | 52% | 2982 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 20260704 | VLTC <sub>(2m24s+1.12s)</sub> | 3258 | 31 | 312 | 54% | 3221 | 50% |
| 20260704 | LTC <sub>(60.0+0.60s)</sub> | 3210 | 30 | 320 | 53% | 3182 | 52% |
| 20260704 | STC <sub>(8.0+0.08s)</sub> | 3020 | 32 | 312 | 53% | 2990 | 36% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 20260628 | VLTC <sub>(2m24s+1.12s)</sub> | 2723 | 46 | 148 | 51% | 2712 | 35% |
| 20260628 | LTC <sub>(60.0+0.60s)</sub> | 2672 | 53 | 116 | 49% | 2681 | 31% |
| 20260628 | STC <sub>(8.0+0.08s)</sub> | 2407 | 53 | 116 | 50% | 2406 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 20260616 | VLTC <sub>(2m24s+1.12s)</sub> | 2745 | 47 | 144 | 51% | 2732 | 36% |
| 20260616 | LTC <sub>(60.0+0.60s)</sub> | 2650 | 47 | 148 | 46% | 2684 | 34% |
| 20260616 | STC <sub>(8.0+0.08s)</sub> | 2408 | 41 | 196 | 44% | 2468 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
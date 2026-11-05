# Engine: Sloth

Author: William Sjolund

Home: https://github.com/Williamguttn/Sloth

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.5 | 2026-11-03 | 2962<sub>(+254) | 3258<sub>(+203) | 3426<sub>(+253) |  |
| 2.4 | 2026-10-09 | 2708<sub>(+271) | 3055<sub>(+184) | 3173<sub>(+179) |  |
| 2.2 | 2026-08-28 | 2437 | 2871 | 2994 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.5 | 2026-11-03 | 3155<sub>(+317) | 3433<sub>(+250) | 3533<sub>(+313) |  |
| 2.4 | 2026-10-09 | 2838<sub>(+176) | 3183<sub>(+140) | 3220<sub>(+114) |  |
| 2.2 | 2026-08-28 | 2662 | 3043 | 3106 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.3 | 2026-09-22 | 2579<sub>(+36) | 2962<sub>(+81) | 3021<sub>(+39) |  |
| 2.2 | 2026-08-28 | 2543 | 2881 | 2982 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Sloth+<version>&body=###%20Engine%20name%0ASloth%0A%0A###%20Version%0A2.3" target="_blank">Submit new version</a>

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

Generated: 2026-11-05 05:42:37

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.2", "2.4", "2.5"]
  y-axis "Elo Rating" 2400 --> 3600
  line "E1: STC (8.0+0.08s)" [2437, 2708, 2962]
  line "E1: LTC (60.0+0.60s)" [2871, 3055, 3258]
  line "E1: VLTC (2m24s+1.12s)" [2994, 3173, 3426]
  line "P1: STC (8.0+0.08s)" [2662, 2838, 3155]
  line "P1: LTC (60.0+0.60s)" [3043, 3183, 3433]
  line "P1: VLTC (2m24s+1.12s)" [3106, 3220, 3533]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.2", "2.3"]
  y-axis "Elo Rating" 2500 --> 3100
  line "T1: STC (8.0+0.08s)" [2543, 2579]
  line "T1: LTC (60.0+0.60s)" [2881, 2962]
  line "T1: VLTC (2m24s+1.12s)" [2982, 3021]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.5 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3533 | 55 | 88 | 57% | 3472 | 63% |
|  |  | E1 | 3426 | 44 | 144 | 53% | 3397 | 56% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3433 | 62 | 68 | 54% | 3399 | 62% |
|  |  | E1 | 3258 | 58 | 88 | 54% | 3225 | 47% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3155 | 65 | 70 | 56% | 3094 | 44% |
|  |  | E1 | 2962 | 50 | 132 | 57% | 2896 | 33% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.4 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3173 | 32 | 276 | 51% | 3168 | 50% |
|  |  | P1 | 3220 | 41 | 162 | 49% | 3227 | 56% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3183 | 39 | 188 | 51% | 3181 | 45% |
|  |  | E1 | 3055 | 33 | 274 | 51% | 3048 | 42% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2838 | 37 | 224 | 54% | 2807 | 42% |
|  |  | E1 | 2708 | 34 | 286 | 52% | 2685 | 34% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.3 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3021 | 36 | 218 | 51% | 3011 | 55% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2962 | 37 | 210 | 51% | 2958 | 47% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2579 | 42 | 190 | 48% | 2596 | 29% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3106 | 38 | 208 | 47% | 3121 | 47% |
|  |  | E1 | 2994 | 33 | 282 | 47% | 3019 | 43% |
|  |  | T1 | 2982 | 33 | 280 | 51% | 2965 | 43% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3043 | 39 | 194 | 49% | 3050 | 46% |
|  |  | E1 | 2871 | 34 | 274 | 46% | 2896 | 39% |
|  |  | T1 | 2881 | 35 | 246 | 53% | 2853 | 46% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2437 | 35 | 280 | 41% | 2525 | 29% |
|  |  | T1 | 2543 | 33 | 304 | 48% | 2560 | 31% |
|  |  | P1 | 2662 | 44 | 180 | 50% | 2660 | 26% |
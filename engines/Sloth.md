# Engine: Sloth

Author: William Sjolund

Home: https://github.com/Williamguttn/Sloth

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.5 | 2026-11-03 | 2971<sub>(+280) | 3268<sub>(+225) | 3398<sub>(+242) |  |
| 2.4 | 2026-10-09 | 2691<sub>(+270) | 3043<sub>(+188) | 3156<sub>(+177) |  |
| 2.2 | 2026-08-28 | 2421 | 2855 | 2979 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.5 | 2026-11-03 | 3128<sub>(+338) | 3403<sub>(+266) | 3475<sub>(+301) |  |
| 2.4 | 2026-10-09 | 2790<sub>(+174) | 3137<sub>(+136) | 3174<sub>(+111) |  |
| 2.2 | 2026-08-28 | 2616 | 3001 | 3063 |  |
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

Generated: 2026-11-12 05:42:38

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.2", "2.4", "2.5"]
  y-axis "Elo Rating" 2400 --> 3500
  line "E1: STC (8.0+0.08s)" [2421, 2691, 2971]
  line "E1: LTC (60.0+0.60s)" [2855, 3043, 3268]
  line "E1: VLTC (2m24s+1.12s)" [2979, 3156, 3398]
  line "P1: STC (8.0+0.08s)" [2616, 2790, 3128]
  line "P1: LTC (60.0+0.60s)" [3001, 3137, 3403]
  line "P1: VLTC (2m24s+1.12s)" [3063, 3174, 3475]
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
| 2.5 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3475 | 39 | 168 | 52% | 3457 | 65% |
|  |  | E1 | 3398 | 31 | 272 | 51% | 3390 | 62% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3403 | 39 | 176 | 53% | 3379 | 61% |
|  |  | E1 | 3268 | 30 | 312 | 52% | 3254 | 58% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3128 | 39 | 194 | 53% | 3101 | 48% |
|  |  | E1 | 2971 | 35 | 266 | 56% | 2916 | 37% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.4 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3156 | 32 | 276 | 51% | 3151 | 50% |
|  |  | P1 | 3174 | 41 | 162 | 49% | 3182 | 56% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3043 | 33 | 278 | 51% | 3027 | 41% |
|  |  | P1 | 3137 | 39 | 188 | 51% | 3136 | 45% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2790 | 37 | 228 | 53% | 2766 | 41% |
|  |  | E1 | 2691 | 34 | 286 | 52% | 2666 | 34% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.3 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3021 | 36 | 218 | 51% | 3011 | 55% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2962 | 37 | 210 | 51% | 2958 | 47% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2579 | 42 | 190 | 48% | 2596 | 29% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3063 | 38 | 208 | 47% | 3078 | 47% |
|  |  | E1 | 2979 | 33 | 282 | 47% | 3002 | 43% |
|  |  | T1 | 2982 | 33 | 280 | 51% | 2965 | 43% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3001 | 39 | 194 | 49% | 3006 | 46% |
|  |  | E1 | 2855 | 34 | 274 | 46% | 2880 | 39% |
|  |  | T1 | 2881 | 35 | 246 | 53% | 2853 | 46% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2616 | 44 | 180 | 50% | 2614 | 26% |
|  |  | E1 | 2421 | 35 | 280 | 41% | 2508 | 29% |
|  |  | T1 | 2543 | 33 | 304 | 48% | 2560 | 31% |
# Engine: Sloth

Author: William Sjolund

Home: https://github.com/Williamguttn/Sloth

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.5 | 2026-11-03 | 2928<sub>(+281) | 3224<sub>(+236) | 3347<sub>(+238) |  |
| 2.4 | 2026-10-09 | 2647<sub>(+262) | 2988<sub>(+173) | 3109<sub>(+170) |  |
| 2.2 | 2026-08-28 | 2385 | 2815 | 2939 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.5 | 2026-11-03 | 2938<sub>(+310) | 3183<sub>(+236) | 3256<sub>(+270) |  |
| 2.4 | 2026-10-09 | 2628<sub>(+167) | 2947<sub>(+127) | 2986<sub>(+113) |  |
| 2.2 | 2026-08-28 | 2461 | 2820 | 2873 |  |
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

Generated: 2026-11-16 05:42:57

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.2", "2.4", "2.5"]
  y-axis "Elo Rating" 2300 --> 3400
  line "E1: STC (8.0+0.08s)" [2385, 2647, 2928]
  line "E1: LTC (60.0+0.60s)" [2815, 2988, 3224]
  line "E1: VLTC (2m24s+1.12s)" [2939, 3109, 3347]
  line "P1: STC (8.0+0.08s)" [2461, 2628, 2938]
  line "P1: LTC (60.0+0.60s)" [2820, 2947, 3183]
  line "P1: VLTC (2m24s+1.12s)" [2873, 2986, 3256]
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
| 2.5 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3347 | 31 | 284 | 50% | 3343 | 62% |
|  |  | P1 | 3256 | 39 | 168 | 52% | 3240 | 65% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3183 | 37 | 192 | 52% | 3170 | 60% |
|  |  | E1 | 3224 | 29 | 316 | 52% | 3208 | 58% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2938 | 38 | 202 | 53% | 2909 | 49% |
|  |  | E1 | 2928 | 34 | 282 | 55% | 2880 | 37% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.4 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2986 | 38 | 194 | 48% | 3005 | 54% |
|  |  | E1 | 3109 | 32 | 284 | 50% | 3109 | 50% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2947 | 38 | 200 | 51% | 2943 | 47% |
|  |  | E1 | 2988 | 32 | 302 | 49% | 2982 | 41% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2628 | 36 | 240 | 51% | 2622 | 40% |
|  |  | E1 | 2647 | 33 | 304 | 51% | 2634 | 34% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.3 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3021 | 36 | 218 | 51% | 3011 | 55% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2962 | 37 | 210 | 51% | 2958 | 47% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2579 | 42 | 190 | 48% | 2596 | 29% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.2 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2982 | 33 | 280 | 51% | 2965 | 43% |
|  |  | P1 | 2873 | 38 | 208 | 47% | 2888 | 47% |
|  |  | E1 | 2939 | 33 | 282 | 47% | 2962 | 43% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2881 | 35 | 246 | 53% | 2853 | 46% |
|  |  | P1 | 2820 | 39 | 194 | 49% | 2826 | 46% |
|  |  | E1 | 2815 | 34 | 274 | 46% | 2839 | 39% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2543 | 33 | 304 | 48% | 2560 | 31% |
|  |  | P1 | 2461 | 44 | 180 | 50% | 2460 | 26% |
|  |  | E1 | 2385 | 35 | 280 | 41% | 2473 | 29% |
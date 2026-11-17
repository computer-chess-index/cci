# Engine: Sloth

Author: William Sjolund

Home: https://github.com/Williamguttn/Sloth

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.5 | 2026-11-03 | 2932<sub>(+282) | 3225<sub>(+233) | 3348<sub>(+239) |  |
| 2.4 | 2026-10-09 | 2650<sub>(+265) | 2992<sub>(+176) | 3109<sub>(+169) |  |
| 2.2 | 2026-08-28 | 2385 | 2816 | 2940 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.5 | 2026-11-03 | 2944<sub>(+311) | 3187<sub>(+233) | 3254<sub>(+260) |  |
| 2.4 | 2026-10-09 | 2633<sub>(+167) | 2954<sub>(+127) | 2994<sub>(+114) |  |
| 2.2 | 2026-08-28 | 2466 | 2827 | 2880 |  |
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

Generated: 2026-11-17 05:43:10

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.2", "2.4", "2.5"]
  y-axis "Elo Rating" 2300 --> 3400
  line "E1: STC (8.0+0.08s)" [2385, 2650, 2932]
  line "E1: LTC (60.0+0.60s)" [2816, 2992, 3225]
  line "E1: VLTC (2m24s+1.12s)" [2940, 3109, 3348]
  line "P1: STC (8.0+0.08s)" [2466, 2633, 2944]
  line "P1: LTC (60.0+0.60s)" [2827, 2954, 3187]
  line "P1: VLTC (2m24s+1.12s)" [2880, 2994, 3254]
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
| 2.5 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3348 | 31 | 284 | 50% | 3345 | 62% |
|  |  | P1 | 3254 | 39 | 172 | 51% | 3240 | 65% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3225 | 29 | 316 | 52% | 3209 | 58% |
|  |  | P1 | 3187 | 36 | 208 | 51% | 3177 | 59% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2944 | 38 | 202 | 53% | 2916 | 49% |
|  |  | E1 | 2932 | 33 | 286 | 55% | 2881 | 37% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.4 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2994 | 37 | 202 | 48% | 3011 | 53% |
|  |  | E1 | 3109 | 31 | 296 | 50% | 3110 | 49% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2954 | 38 | 204 | 51% | 2950 | 48% |
|  |  | E1 | 2992 | 32 | 306 | 50% | 2984 | 41% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2633 | 36 | 240 | 51% | 2626 | 40% |
|  |  | E1 | 2650 | 32 | 308 | 51% | 2634 | 34% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.3 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3021 | 36 | 218 | 51% | 3011 | 55% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2962 | 37 | 210 | 51% | 2958 | 47% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2579 | 42 | 190 | 48% | 2596 | 29% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.2 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2982 | 33 | 280 | 51% | 2965 | 43% |
|  |  | P1 | 2880 | 38 | 208 | 47% | 2894 | 47% |
|  |  | E1 | 2940 | 33 | 282 | 47% | 2963 | 43% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2881 | 35 | 246 | 53% | 2853 | 46% |
|  |  | P1 | 2827 | 39 | 194 | 49% | 2832 | 46% |
|  |  | E1 | 2816 | 34 | 274 | 46% | 2840 | 39% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2543 | 33 | 304 | 48% | 2560 | 31% |
|  |  | P1 | 2466 | 44 | 180 | 50% | 2466 | 26% |
|  |  | E1 | 2385 | 35 | 280 | 41% | 2475 | 29% |
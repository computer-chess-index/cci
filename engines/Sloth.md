# Engine: Sloth

Author: William Sjolund

Home: https://github.com/Williamguttn/Sloth

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.5 | 2026-11-03 | 2915<sub>(+273) | 3213<sub>(+224) | 3337<sub>(+236) |  |
| 2.4 | 2026-10-09 | 2642<sub>(+261) | 2989<sub>(+182) | 3101<sub>(+170) |  |
| 2.2 | 2026-08-28 | 2381 | 2807 | 2931 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.5 | 2026-11-03 | 2928<sub>(+308) | 3187<sub>(+248) | 3259<sub>(+285) |  |
| 2.4 | 2026-10-09 | 2620<sub>(+166) | 2939<sub>(+131) | 2974<sub>(+109) |  |
| 2.2 | 2026-08-28 | 2454 | 2808 | 2865 |  |
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

Generated: 2026-11-15 05:42:54

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.2", "2.4", "2.5"]
  y-axis "Elo Rating" 2300 --> 3400
  line "E1: STC (8.0+0.08s)" [2381, 2642, 2915]
  line "E1: LTC (60.0+0.60s)" [2807, 2989, 3213]
  line "E1: VLTC (2m24s+1.12s)" [2931, 3101, 3337]
  line "P1: STC (8.0+0.08s)" [2454, 2620, 2928]
  line "P1: LTC (60.0+0.60s)" [2808, 2939, 3187]
  line "P1: VLTC (2m24s+1.12s)" [2865, 2974, 3259]
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
| 2.5 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3259 | 39 | 168 | 52% | 3243 | 65% |
|  |  | E1 | 3337 | 31 | 280 | 50% | 3333 | 62% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3187 | 38 | 184 | 52% | 3168 | 60% |
|  |  | E1 | 3213 | 30 | 312 | 52% | 3198 | 58% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2915 | 34 | 278 | 54% | 2871 | 37% |
|  |  | P1 | 2928 | 38 | 198 | 53% | 2901 | 48% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.4 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2974 | 38 | 190 | 48% | 2990 | 53% |
|  |  | E1 | 3101 | 32 | 284 | 50% | 3101 | 50% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2939 | 38 | 196 | 51% | 2935 | 47% |
|  |  | E1 | 2989 | 33 | 290 | 50% | 2974 | 41% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2620 | 36 | 240 | 51% | 2614 | 40% |
|  |  | E1 | 2642 | 33 | 300 | 51% | 2627 | 34% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.3 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3021 | 36 | 218 | 51% | 3011 | 55% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2962 | 37 | 210 | 51% | 2958 | 47% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2579 | 42 | 190 | 48% | 2596 | 29% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.2 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2931 | 33 | 282 | 47% | 2954 | 43% |
|  |  | T1 | 2982 | 33 | 280 | 51% | 2965 | 43% |
|  |  | P1 | 2865 | 38 | 208 | 47% | 2880 | 47% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2807 | 34 | 274 | 46% | 2831 | 39% |
|  |  | T1 | 2881 | 35 | 246 | 53% | 2853 | 46% |
|  |  | P1 | 2808 | 39 | 194 | 49% | 2813 | 46% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2381 | 35 | 280 | 41% | 2469 | 29% |
|  |  | T1 | 2543 | 33 | 304 | 48% | 2560 | 31% |
|  |  | P1 | 2454 | 44 | 180 | 50% | 2454 | 26% |
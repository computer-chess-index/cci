# Engine: Scarlet

Author: Evan Guerra

Home: https://github.com/EIG520/scarlet

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-10-13 | 2709<sub>(+676) | 3089<sub>(+718) | 3144<sub>(+652) |  |
| 1.0 | 2026-07-26 | 2033 | 2371 | 2492 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-10-13 | 3028<sub>(+823) | 3228<sub>(+708) | 3330<sub>(+772) |  |
| 1.0 | 2026-07-26 | 2205 | 2520 | 2558 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.0 | 2026-07-26 | 2194 | 2468 | 2520 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Scarlet+<version>&body=###%20Engine%20name%0AScarlet%0A%0A###%20Version%0A1.0" target="_blank">Submit new version</a>

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

Generated: 2026-10-16 04:43:31

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "2.0"]
  y-axis "Elo Rating" 2000 --> 3400
  line "E1: STC (8.0+0.08s)" [2033, 2709]
  line "E1: LTC (60.0+0.60s)" [2371, 3089]
  line "E1: VLTC (2m24s+1.12s)" [2492, 3144]
  line "P1: STC (8.0+0.08s)" [2205, 3028]
  line "P1: LTC (60.0+0.60s)" [2520, 3228]
  line "P1: VLTC (2m24s+1.12s)" [2558, 3330]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3330 | 46 | 146 | 58% | 3244 | 47% |
|  |  | E1 | 3144 | 37 | 212 | 55% | 3087 | 50% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3228 | 54 | 114 | 57% | 3144 | 35% |
|  |  | E1 | 3089 | 39 | 206 | 55% | 3024 | 41% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3028 | 46 | 152 | 50% | 3006 | 36% |
|  |  | E1 | 2709 | 43 | 190 | 57% | 2626 | 26% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2492 | 39 | 238 | 48% | 2512 | 26% |
|  |  | T1 | 2520 | 37 | 252 | 50% | 2525 | 24% |
|  |  | P1 | 2558 | 44 | 194 | 45% | 2623 | 20% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2468 | 37 | 250 | 51% | 2437 | 25% |
|  |  | P1 | 2520 | 45 | 180 | 48% | 2558 | 22% |
|  |  | E1 | 2371 | 38 | 246 | 50% | 2363 | 26% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2194 | 39 | 244 | 50% | 2187 | 18% |
|  |  | P1 | 2205 | 44 | 184 | 49% | 2211 | 21% |
|  |  | E1 | 2033 | 36 | 276 | 47% | 2063 | 21% |
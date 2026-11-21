# Engine: Ankax

Author: Amrou Anka

Home: https://github.com/amrouanka/ankax-chess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.0 | 2026-11-17 | 2148<sub>(+61) | 2438<sub>(-23) | 2522<sub>(-24) |  |
| 1.0.6 | 2026-11-12 | 2087<sub>(-31) | 2461<sub>(+120) | 2546<sub>(+93) |  |
| 1.0.4 | 2026-11-10 | 2118 | 2341 | 2453 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.0 | 2026-11-17 | 2171<sub>(+91) | 2411<sub>(-4) | 2511<sub>(-1) |  |
| 1.0.6 | 2026-11-12 | 2080<sub>(+40) | 2415<sub>(+54) | 2512<sub>(+187) |  |
| 1.0.4 | 2026-11-10 | 2040 | 2361 | 2325 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.0.4 | 2026-11-10 | 2040 | 2361 | 2325 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Ankax+<version>&body=###%20Engine%20name%0AAnkax%0A%0A###%20Version%0A1.1.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-21 05:35:41

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.4", "1.0.6", "1.1.0"]
  y-axis "Elo Rating" 2000 --> 2600
  line "E1: STC (8.0+0.08s)" [2118, 2087, 2148]
  line "E1: LTC (60.0+0.60s)" [2341, 2461, 2438]
  line "E1: VLTC (2m24s+1.12s)" [2453, 2546, 2522]
  line "P1: STC (8.0+0.08s)" [2040, 2080, 2171]
  line "P1: LTC (60.0+0.60s)" [2361, 2415, 2411]
  line "P1: VLTC (2m24s+1.12s)" [2325, 2512, 2511]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2511 | 54 | 108 | 53% | 2481 | 36% |
|  |  | E1 | 2522 | 41 | 196 | 47% | 2547 | 28% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2411 | 66 | 76 | 47% | 2445 | 28% |
|  |  | E1 | 2438 | 47 | 148 | 50% | 2441 | 31% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2171 | 54 | 116 | 48% | 2194 | 24% |
|  |  | E1 | 2148 | 43 | 212 | 50% | 2196 | 20% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0.6 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2512 | 51 | 124 | 43% | 2581 | 31% |
|  |  | E1 | 2546 | 50 | 132 | 54% | 2512 | 30% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2415 | 49 | 136 | 46% | 2453 | 29% |
|  |  | E1 | 2461 | 48 | 148 | 53% | 2435 | 24% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2080 | 47 | 158 | 46% | 2128 | 22% |
|  |  | E1 | 2087 | 45 | 180 | 44% | 2151 | 24% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0.4 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2325 | 43 | 186 | 49% | 2331 | 24% |
|  |  | E1 | 2453 | 41 | 204 | 52% | 2439 | 29% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2361 | 49 | 150 | 58% | 2291 | 28% |
|  |  | E1 | 2341 | 41 | 204 | 50% | 2327 | 29% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2040 | 47 | 172 | 51% | 1994 | 18% |
|  |  | E1 | 2118 | 42 | 208 | 56% | 2040 | 22% |
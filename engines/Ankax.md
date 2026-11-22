# Engine: Ankax

Author: Amrou Anka

Home: https://github.com/amrouanka/ankax-chess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.0 | 2026-11-17 | 2152<sub>(+62) | 2434<sub>(-31) | 2525<sub>(-24) |  |
| 1.0.6 | 2026-11-12 | 2090<sub>(-31) | 2465<sub>(+123) | 2549<sub>(+92) |  |
| 1.0.4 | 2026-11-10 | 2121 | 2342 | 2457 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.0 | 2026-11-17 | 2161<sub>(+79) | 2406<sub>(-4) | 2511<sub>(-4) |  |
| 1.0.6 | 2026-11-12 | 2082<sub>(+42) | 2410<sub>(+50) | 2515<sub>(+192) |  |
| 1.0.4 | 2026-11-10 | 2040 | 2360 | 2323 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.0.4 | 2026-11-10 | 2040 | 2360 | 2323 |  |
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

Generated: 2026-11-22 05:35:38

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.4", "1.0.6", "1.1.0"]
  y-axis "Elo Rating" 2000 --> 2600
  line "E1: STC (8.0+0.08s)" [2121, 2090, 2152]
  line "E1: LTC (60.0+0.60s)" [2342, 2465, 2434]
  line "E1: VLTC (2m24s+1.12s)" [2457, 2549, 2525]
  line "P1: STC (8.0+0.08s)" [2040, 2082, 2161]
  line "P1: LTC (60.0+0.60s)" [2360, 2410, 2406]
  line "P1: VLTC (2m24s+1.12s)" [2323, 2515, 2511]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2511 | 54 | 108 | 53% | 2483 | 36% |
|  |  | E1 | 2525 | 41 | 196 | 47% | 2550 | 28% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2406 | 55 | 108 | 48% | 2431 | 27% |
|  |  | E1 | 2434 | 45 | 156 | 49% | 2442 | 32% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2161 | 48 | 152 | 48% | 2183 | 23% |
|  |  | E1 | 2152 | 42 | 216 | 50% | 2199 | 20% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0.6 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2515 | 51 | 124 | 43% | 2583 | 31% |
|  |  | E1 | 2549 | 50 | 132 | 54% | 2516 | 30% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2410 | 49 | 140 | 45% | 2452 | 28% |
|  |  | E1 | 2465 | 48 | 148 | 53% | 2438 | 24% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2082 | 47 | 158 | 46% | 2128 | 22% |
|  |  | E1 | 2090 | 45 | 180 | 44% | 2153 | 24% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0.4 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2323 | 43 | 186 | 49% | 2330 | 24% |
|  |  | E1 | 2457 | 41 | 204 | 52% | 2442 | 29% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2360 | 49 | 150 | 58% | 2291 | 28% |
|  |  | E1 | 2342 | 41 | 204 | 50% | 2329 | 29% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2121 | 42 | 208 | 56% | 2043 | 22% |
|  |  | P1 | 2040 | 47 | 172 | 51% | 1994 | 18% |
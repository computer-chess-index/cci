# Engine: Ankax

Author: Amrou Anka

Home: https://github.com/amrouanka/ankax-chess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.0 | 2026-11-17 | 2151<sub>(+63) | 2431<sub>(-33) | 2523<sub>(-23) |  |
| 1.0.6 | 2026-11-12 | 2088<sub>(-32) | 2464<sub>(+123) | 2546<sub>(+92) |  |
| 1.0.4 | 2026-11-10 | 2120 | 2341 | 2454 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.0 | 2026-11-17 | 2169<sub>(+83) | 2411<sub>(-3) | 2503<sub>(-17) |  |
| 1.0.6 | 2026-11-12 | 2086<sub>(+43) | 2414<sub>(+49) | 2520<sub>(+193) |  |
| 1.0.4 | 2026-11-10 | 2043 | 2365 | 2327 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.0.4 | 2026-11-10 | 2043 | 2365 | 2327 |  |
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

Generated: 2026-11-23 05:35:39

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.4", "1.0.6", "1.1.0"]
  y-axis "Elo Rating" 2000 --> 2600
  line "E1: STC (8.0+0.08s)" [2120, 2088, 2151]
  line "E1: LTC (60.0+0.60s)" [2341, 2464, 2431]
  line "E1: VLTC (2m24s+1.12s)" [2454, 2546, 2523]
  line "P1: STC (8.0+0.08s)" [2043, 2086, 2169]
  line "P1: LTC (60.0+0.60s)" [2365, 2414, 2411]
  line "P1: VLTC (2m24s+1.12s)" [2327, 2520, 2503]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2503 | 50 | 128 | 51% | 2492 | 35% |
|  |  | E1 | 2523 | 41 | 196 | 47% | 2547 | 28% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2411 | 56 | 108 | 48% | 2437 | 27% |
|  |  | E1 | 2431 | 42 | 180 | 50% | 2437 | 32% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2169 | 46 | 160 | 49% | 2187 | 24% |
|  |  | E1 | 2151 | 42 | 216 | 50% | 2198 | 20% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0.6 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2546 | 50 | 132 | 54% | 2514 | 30% |
|  |  | P1 | 2520 | 52 | 124 | 43% | 2588 | 31% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2464 | 48 | 148 | 53% | 2437 | 24% |
|  |  | P1 | 2414 | 49 | 140 | 45% | 2457 | 28% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2088 | 45 | 180 | 44% | 2152 | 24% |
|  |  | P1 | 2086 | 47 | 158 | 46% | 2132 | 22% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0.4 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2327 | 43 | 186 | 49% | 2334 | 24% |
|  |  | E1 | 2454 | 41 | 204 | 52% | 2441 | 29% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2365 | 49 | 150 | 58% | 2295 | 28% |
|  |  | E1 | 2341 | 41 | 204 | 50% | 2327 | 29% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2043 | 47 | 172 | 51% | 1997 | 18% |
|  |  | E1 | 2120 | 42 | 208 | 56% | 2040 | 22% |
# Engine: Buster

Author: Anders Carlsson

Home: https://github.com/andersrcarlsson-stack/Buster-Chess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0.4 | 2026-11-05 | 2191<sub>(+13) | 2491<sub>(-50) | 2619<sub>(+4) |  |
| 7.0.3 | 2026-10-29 | 2178 | 2541 | 2615 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0.4 | 2026-11-05 | 2194<sub>(+10) | 2489<sub>(+12) | 2560<sub>(+52) |  |
| 7.0.3 | 2026-10-29 | 2184 | 2477 | 2508 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0.3 | 2026-10-29 | 2184 | 2477 | 2508 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Buster+<version>&body=###%20Engine%20name%0ABuster%0A%0A###%20Version%0A7.0.4" target="_blank">Submit new version</a>

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

Generated: 2026-11-21 05:36:39

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["7.0.3", "7.0.4"]
  y-axis "Elo Rating" 2100 --> 2700
  line "E1: STC (8.0+0.08s)" [2178, 2191]
  line "E1: LTC (60.0+0.60s)" [2541, 2491]
  line "E1: VLTC (2m24s+1.12s)" [2615, 2619]
  line "P1: STC (8.0+0.08s)" [2184, 2194]
  line "P1: LTC (60.0+0.60s)" [2477, 2489]
  line "P1: VLTC (2m24s+1.12s)" [2508, 2560]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 7.0.4 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2560 | 45 | 168 | 50% | 2566 | 28% |
|  |  | E1 | 2619 | 32 | 352 | 48% | 2630 | 26% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2489 | 38 | 228 | 48% | 2502 | 32% |
|  |  | E1 | 2491 | 35 | 272 | 52% | 2472 | 30% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2194 | 41 | 196 | 47% | 2226 | 29% |
|  |  | E1 | 2191 | 35 | 280 | 51% | 2174 | 26% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 7.0.3 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2508 | 45 | 168 | 56% | 2437 | 32% |
|  |  | E1 | 2615 | 37 | 260 | 53% | 2577 | 24% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2477 | 44 | 188 | 57% | 2356 | 28% |
|  |  | E1 | 2541 | 30 | 396 | 57% | 2442 | 27% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2184 | 43 | 206 | 57% | 2091 | 26% |
|  |  | E1 | 2178 | 39 | 244 | 55% | 2105 | 19% |
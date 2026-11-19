# Engine: Buster

Author: Anders Carlsson

Home: https://github.com/andersrcarlsson-stack/Buster-Chess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0.4 | 2026-11-05 | 2195<sub>(+16) | 2488<sub>(-53) | 2622<sub>(+8) |  |
| 7.0.3 | 2026-10-29 | 2179 | 2541 | 2614 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0.4 | 2026-11-05 | 2187<sub>(+23) | 2476<sub>(+3) | 2552<sub>(+56) |  |
| 7.0.3 | 2026-10-29 | 2164 | 2473 | 2496 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0.3 | 2026-10-29 | 2164 | 2473 | 2496 |  |
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

Generated: 2026-11-19 05:36:38

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["7.0.3", "7.0.4"]
  y-axis "Elo Rating" 2100 --> 2700
  line "E1: STC (8.0+0.08s)" [2179, 2195]
  line "E1: LTC (60.0+0.60s)" [2541, 2488]
  line "E1: VLTC (2m24s+1.12s)" [2614, 2622]
  line "P1: STC (8.0+0.08s)" [2164, 2187]
  line "P1: LTC (60.0+0.60s)" [2473, 2476]
  line "P1: VLTC (2m24s+1.12s)" [2496, 2552]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 7.0.4 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2622 | 33 | 326 | 48% | 2630 | 27% |
|  |  | P1 | 2552 | 45 | 168 | 50% | 2557 | 28% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2488 | 35 | 268 | 52% | 2472 | 30% |
|  |  | P1 | 2476 | 39 | 216 | 47% | 2495 | 32% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2187 | 42 | 188 | 47% | 2226 | 28% |
|  |  | E1 | 2195 | 35 | 276 | 51% | 2178 | 26% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 7.0.3 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2496 | 46 | 160 | 56% | 2425 | 32% |
|  |  | E1 | 2614 | 37 | 260 | 53% | 2576 | 24% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2473 | 46 | 172 | 58% | 2337 | 27% |
|  |  | E1 | 2541 | 30 | 396 | 57% | 2441 | 27% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2164 | 45 | 188 | 56% | 2082 | 25% |
|  |  | E1 | 2179 | 39 | 244 | 55% | 2107 | 19% |
# Engine: ElephantGambit

Author: Ek Alexander Loodin

Home: https://github.com/looak/elephant

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.2 | 2026-10-25 | 2418<sub>(+155) | 2769<sub>(+180) | 2834<sub>(+176) |  |
| 1.0.0 | 2026-10-14 | 2263<sub>(-13) | 2589<sub>(+70) | 2658<sub>(+4) |  |
| 0.15.2 | 2026-10-11 | 2276<sub>(+1455) | 2519<sub>(+new) | 2654<sub>(+27) |  |
| 0.15.1 | 2026-10-11 | 821 |  | 2627 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.2 | 2026-10-25 | 2468<sub>(+261) | 2731<sub>(+255) | 2793<sub>(+178) |  |
| 1.0.0 | 2026-10-14 | 2207<sub>(-30) | 2476<sub>(-96) | 2615<sub>(+82) |  |
| 0.15.2 | 2026-10-11 | 2237 | 2572 | 2533 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.15.2 | 2026-10-11 | 2237 | 2572 | 2533 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+ElephantGambit+<version>&body=###%20Engine%20name%0AElephantGambit%0A%0A###%20Version%0A1.3.2" target="_blank">Submit new version</a>

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

Generated: 2026-11-20 05:38:05

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.15.2", "1.0.0", "1.3.2"]
  y-axis "Elo Rating" 2200 --> 2900
  line "E1: STC (8.0+0.08s)" [2276, 2263, 2418]
  line "E1: LTC (60.0+0.60s)" [2519, 2589, 2769]
  line "E1: VLTC (2m24s+1.12s)" [2654, 2658, 2834]
  line "P1: STC (8.0+0.08s)" [2237, 2207, 2468]
  line "P1: LTC (60.0+0.60s)" [2572, 2476, 2731]
  line "P1: VLTC (2m24s+1.12s)" [2533, 2615, 2793]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.3.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2793 | 35 | 256 | 47% | 2826 | 38% |
|  |  | E1 | 2834 | 30 | 360 | 52% | 2817 | 34% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2731 | 38 | 228 | 48% | 2751 | 32% |
|  |  | E1 | 2769 | 31 | 344 | 48% | 2782 | 33% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2468 | 40 | 208 | 50% | 2466 | 27% |
|  |  | E1 | 2418 | 35 | 268 | 50% | 2411 | 30% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2658 | 39 | 232 | 50% | 2665 | 24% |
|  |  | P1 | 2615 | 40 | 208 | 52% | 2606 | 28% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2476 | 42 | 186 | 50% | 2493 | 29% |
|  |  | E1 | 2589 | 37 | 254 | 49% | 2589 | 26% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2207 | 39 | 236 | 57% | 2152 | 22% |
|  |  | E1 | 2263 | 38 | 256 | 50% | 2255 | 21% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.15.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2533 | 64 | 82 | 53% | 2500 | 28% |
|  |  | E1 | 2654 | 50 | 132 | 49% | 2665 | 28% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2572 | 58 | 104 | 55% | 2512 | 28% |
|  |  | E1 | 2519 | 52 | 122 | 51% | 2500 | 30% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2237 | 64 | 90 | 55% | 2175 | 17% |
|  |  | E1 | 2276 | 49 | 156 | 55% | 2157 | 24% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.15.1 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2627 | 87 | 48 | 51% | 2606 | 19% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1725 | 331 | 16 | 100% | 694 | 0% |
|  |  | E1 | 821 | 341 | 6 | 100% | 254 | 0% |
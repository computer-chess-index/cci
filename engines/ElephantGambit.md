# Engine: ElephantGambit

Author: Ek Alexander Loodin

Home: https://github.com/looak/elephant

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.2 | 2026-10-25 | 2407<sub>(+147) | 2763<sub>(+179) | 2827<sub>(+172) |  |
| 1.0.0 | 2026-10-14 | 2260<sub>(-15) | 2584<sub>(+69) | 2655<sub>(+6) |  |
| 0.15.2 | 2026-10-11 | 2275<sub>(+1445) | 2515<sub>(+new) | 2649<sub>(+29) |  |
| 0.15.1 | 2026-10-11 | 830 |  | 2620 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.2 | 2026-10-25 | 2433<sub>(+255) | 2705<sub>(+249) | 2763<sub>(+171) |  |
| 1.0.0 | 2026-10-14 | 2178<sub>(-41) | 2456<sub>(-93) | 2592<sub>(+81) |  |
| 0.15.2 | 2026-10-11 | 2219 | 2549 | 2511 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.15.2 | 2026-10-11 | 2219 | 2549 | 2511 |  |
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

Generated: 2026-11-15 05:38:04

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.15.2", "1.0.0", "1.3.2"]
  y-axis "Elo Rating" 2100 --> 2900
  line "E1: STC (8.0+0.08s)" [2275, 2260, 2407]
  line "E1: LTC (60.0+0.60s)" [2515, 2584, 2763]
  line "E1: VLTC (2m24s+1.12s)" [2649, 2655, 2827]
  line "P1: STC (8.0+0.08s)" [2219, 2178, 2433]
  line "P1: LTC (60.0+0.60s)" [2549, 2456, 2705]
  line "P1: VLTC (2m24s+1.12s)" [2511, 2592, 2763]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.3.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2763 | 37 | 224 | 47% | 2793 | 38% |
|  |  | E1 | 2827 | 31 | 336 | 53% | 2809 | 34% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2705 | 40 | 208 | 48% | 2722 | 34% |
|  |  | E1 | 2763 | 32 | 328 | 48% | 2777 | 34% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2433 | 42 | 196 | 49% | 2444 | 27% |
|  |  | E1 | 2407 | 37 | 240 | 50% | 2395 | 32% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2655 | 40 | 220 | 50% | 2651 | 25% |
|  |  | P1 | 2592 | 41 | 200 | 52% | 2583 | 29% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2584 | 37 | 250 | 49% | 2584 | 26% |
|  |  | P1 | 2456 | 44 | 170 | 50% | 2473 | 29% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2178 | 42 | 208 | 56% | 2133 | 23% |
|  |  | E1 | 2260 | 38 | 248 | 50% | 2252 | 22% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.15.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2511 | 64 | 82 | 53% | 2479 | 28% |
|  |  | E1 | 2649 | 50 | 132 | 49% | 2660 | 28% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2549 | 58 | 104 | 55% | 2489 | 28% |
|  |  | E1 | 2515 | 52 | 122 | 51% | 2496 | 30% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2219 | 64 | 90 | 55% | 2160 | 17% |
|  |  | E1 | 2275 | 49 | 156 | 55% | 2157 | 24% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.15.1 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2620 | 87 | 48 | 51% | 2599 | 19% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1732 | 331 | 16 | 100% | 697 | 0% |
|  |  | E1 | 830 | 342 | 6 | 100% | 261 | 0% |
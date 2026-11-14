# Engine: Crafty

Author: Robert M. Hyatt

Home: https://github.com/stevemaughan/Crafty-Chess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 25.6.1 | 2026-06-24 | 2437<sub>(-98) | 2750<sub>(-19) | 2847<sub>(-8) |  |
| 25.2.1 | 2026-06-20 | 2535 | 2769 | 2855 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 25.6.1 | 2026-06-24 | 2422<sub>(+239) | 2668<sub>(-68) | 2763<sub>(-67) |  |
| 25.2.1 | 2026-06-20 | 2183 | 2736 | 2830 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 25.6.1 | 2026-06-24 | 2475<sub>(-41) | 2789<sub>(+3) | 2858<sub>(-82) |  |
| 25.2.1 | 2026-06-20 | 2516 | 2786 | 2940 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Crafty+<version>&body=###%20Engine%20name%0ACrafty%0A%0A###%20Version%0A25.6.1" target="_blank">Submit new version</a>

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

Generated: 2026-11-14 05:37:29

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["25.2.1", "25.6.1"]
  y-axis "Elo Rating" 2100 --> 2900
  line "E1: STC (8.0+0.08s)" [2535, 2437]
  line "E1: LTC (60.0+0.60s)" [2769, 2750]
  line "E1: VLTC (2m24s+1.12s)" [2855, 2847]
  line "P1: STC (8.0+0.08s)" [2183, 2422]
  line "P1: LTC (60.0+0.60s)" [2736, 2668]
  line "P1: VLTC (2m24s+1.12s)" [2830, 2763]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["25.2.1", "25.6.1"]
  y-axis "Elo Rating" 2400 --> 3000
  line "T1: STC (8.0+0.08s)" [2516, 2475]
  line "T1: LTC (60.0+0.60s)" [2786, 2789]
  line "T1: VLTC (2m24s+1.12s)" [2940, 2858]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 25.6.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2858 | 27 | 424 | 49% | 2871 | 35% |
|  |  | P1 | 2763 | 35 | 268 | 47% | 2797 | 32% |
|  |  | E1 | 2847 | 30 | 362 | 49% | 2861 | 32% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2789 | 32 | 328 | 50% | 2786 | 30% |
|  |  | P1 | 2668 | 34 | 300 | 49% | 2685 | 30% |
|  |  | E1 | 2750 | 27 | 462 | 47% | 2786 | 31% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2475 | 31 | 356 | 50% | 2473 | 28% |
|  |  | P1 | 2422 | 37 | 268 | 52% | 2394 | 27% |
|  |  | E1 | 2437 | 31 | 354 | 49% | 2444 | 26% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 25.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2940 | 51 | 130 | 50% | 2943 | 28% |
|  |  | P1 | 2830 | 121 | 32 | 70% | 2564 | 16% |
|  |  | E1 | 2855 | 83 | 56 | 45% | 2880 | 25% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2736 | 141 | 40 | 76% | 2161 | 3% |
|  |  | E1 | 2769 | 88 | 48 | 55% | 2608 | 23% |
|  |  | T1 | 2786 | 56 | 112 | 49% | 2801 | 24% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2183 | 105 | 44 | 57% | 2028 | 18% |
|  |  | E1 | 2535 | 84 | 54 | 41% | 2654 | 19% |
|  |  | T1 | 2516 | 59 | 96 | 52% | 2499 | 26% |
# Engine: Crafty

Author: Robert M. Hyatt

Home: https://github.com/stevemaughan/Crafty-Chess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 25.6.1 | 2026-06-24 | 2435<sub>(-40) | 2747<sub>(-70) | 2855<sub>(+12) |  |
| 25.2.1 | 2026-06-20 | 2475 | 2817 | 2843 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 25.6.1 | 2026-06-24 | 2464<sub>(+142) | 2701<sub>(-58) | 2800<sub>(-35) |  |
| 25.2.1 | 2026-06-20 | 2322 | 2759 | 2835 |  |
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

Generated: 2026-11-23 05:37:36

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["25.2.1", "25.6.1"]
  y-axis "Elo Rating" 2300 --> 2900
  line "E1: STC (8.0+0.08s)" [2475, 2435]
  line "E1: LTC (60.0+0.60s)" [2817, 2747]
  line "E1: VLTC (2m24s+1.12s)" [2843, 2855]
  line "P1: STC (8.0+0.08s)" [2322, 2464]
  line "P1: LTC (60.0+0.60s)" [2759, 2701]
  line "P1: VLTC (2m24s+1.12s)" [2835, 2800]
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
| 25.6.1 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2855 | 29 | 396 | 50% | 2862 | 32% |
|  |  | T1 | 2858 | 27 | 424 | 49% | 2871 | 35% |
|  |  | P1 | 2800 | 33 | 296 | 47% | 2832 | 31% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2747 | 26 | 490 | 46% | 2793 | 31% |
|  |  | T1 | 2789 | 32 | 328 | 50% | 2786 | 30% |
|  |  | P1 | 2701 | 32 | 340 | 49% | 2715 | 29% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2435 | 30 | 392 | 50% | 2435 | 27% |
|  |  | T1 | 2475 | 31 | 356 | 50% | 2473 | 28% |
|  |  | P1 | 2464 | 35 | 300 | 53% | 2426 | 25% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 25.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2940 | 51 | 130 | 50% | 2943 | 28% |
|  |  | P1 | 2835 | 68 | 80 | 56% | 2751 | 25% |
|  |  | E1 | 2843 | 62 | 96 | 46% | 2866 | 27% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2786 | 56 | 112 | 49% | 2801 | 24% |
|  |  | P1 | 2759 | 73 | 88 | 60% | 2510 | 14% |
|  |  | E1 | 2817 | 61 | 96 | 56% | 2700 | 25% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2516 | 59 | 96 | 52% | 2499 | 26% |
|  |  | P1 | 2322 | 57 | 112 | 58% | 2183 | 29% |
|  |  | E1 | 2475 | 58 | 110 | 42% | 2577 | 22% |
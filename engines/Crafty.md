# Engine: Crafty

Author: Robert M. Hyatt

Home: https://github.com/stevemaughan/Crafty-Chess

## Elo Ratings E1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 25.6.1 | 2026-06-24 | 2373 | 2682 | 2795 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 25.6.1 | 2026-06-24 | 2565 | 2826 | 2932 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1

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

Generated: 2026-10-13 04:37:42

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

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 25.6.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2795 | 35 | 270 | 49% | 2805 | 31% |
| 25.6.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2858 | 27 | 424 | 49% | 2871 | 35% |
| 25.6.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2932 | 42 | 180 | 49% | 2942 | 34% |
| 25.6.1 | LTC <sub>(60.0+0.60s)</sub> | 2789 | 32 | 328 | 50% | 2786 | 30% |
| 25.6.1 | LTC <sub>(60.0+0.60s)</sub> | 2826 | 38 | 236 | 50% | 2836 | 31% |
| 25.6.1 | LTC <sub>(60.0+0.60s)</sub> | 2682 | 34 | 292 | 46% | 2727 | 30% |
| 25.6.1 | STC <sub>(8.0+0.08s)</sub> | 2475 | 31 | 356 | 50% | 2473 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 25.6.1 | STC <sub>(8.0+0.08s)</sub> | 2565 | 41 | 208 | 51% | 2545 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 25.6.1 | STC <sub>(8.0+0.08s)</sub> | 2373 | 36 | 262 | 50% | 2372 | 27% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 25.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2940 | 51 | 130 | 50% | 2943 | 28% |
| 25.2.1 | LTC <sub>(60.0+0.60s)</sub> | 2786 | 56 | 112 | 49% | 2801 | 24% |
| 25.2.1 | STC <sub>(8.0+0.08s)</sub> | 2516 | 59 | 96 | 52% | 2499 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
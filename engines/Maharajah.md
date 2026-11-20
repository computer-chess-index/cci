# Engine: Maharajah

Author: Oleksandr Velykotskyi

Home: https://github.com/Villi14/MaharajahCXX

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4.1 | 2026-11-17 | 2592<sub>(+35) | 2882<sub>(+12) | 3033<sub>(+81) |  |
| 1.4.0 | 2026-11-15 | 2557<sub>(+159) | 2870<sub>(+140) | 2952<sub>(+49) |  |
| 1.3.2 | 2026-11-11 | 2398 | 2730 | 2903 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4.1 | 2026-11-17 | 2572<sub>(+11) | 2882<sub>(+36) | 2913<sub>(-21) |  |
| 1.4.0 | 2026-11-15 | 2561<sub>(+225) | 2846<sub>(+47) | 2934<sub>(+214) |  |
| 1.3.2 | 2026-11-11 | 2336 | 2799 | 2720 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.2 | 2026-11-11 | 2336 | 2799 | 2720 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Maharajah+<version>&body=###%20Engine%20name%0AMaharajah%0A%0A###%20Version%0A1.4.1" target="_blank">Submit new version</a>

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

Generated: 2026-11-20 05:40:07

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.3.2", "1.4.0", "1.4.1"]
  y-axis "Elo Rating" 2300 --> 3100
  line "E1: STC (8.0+0.08s)" [2398, 2557, 2592]
  line "E1: LTC (60.0+0.60s)" [2730, 2870, 2882]
  line "E1: VLTC (2m24s+1.12s)" [2903, 2952, 3033]
  line "P1: STC (8.0+0.08s)" [2336, 2561, 2572]
  line "P1: LTC (60.0+0.60s)" [2799, 2846, 2882]
  line "P1: VLTC (2m24s+1.12s)" [2720, 2934, 2913]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2913 | 61 | 88 | 52% | 2894 | 30% |
|  |  | E1 | 3033 | 43 | 172 | 52% | 3013 | 35% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2882 | 63 | 82 | 54% | 2851 | 29% |
|  |  | E1 | 2882 | 40 | 200 | 51% | 2876 | 32% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2572 | 61 | 92 | 44% | 2628 | 25% |
|  |  | E1 | 2592 | 46 | 168 | 51% | 2580 | 21% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2934 | 42 | 174 | 44% | 2988 | 40% |
|  |  | E1 | 2952 | 47 | 144 | 47% | 2985 | 33% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2846 | 47 | 144 | 53% | 2816 | 34% |
|  |  | E1 | 2870 | 42 | 190 | 48% | 2892 | 30% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2561 | 50 | 136 | 54% | 2514 | 25% |
|  |  | E1 | 2557 | 43 | 180 | 48% | 2577 | 28% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.3.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2720 | 97 | 40 | 45% | 2645 | 25% |
|  |  | E1 | 2903 | 74 | 64 | 56% | 2809 | 25% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2799 | 121 | 36 | 75% | 2373 | 17% |
|  |  | E1 | 2730 | 77 | 62 | 47% | 2759 | 13% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2336 | 81 | 56 | 58% | 2230 | 20% |
|  |  | E1 | 2398 | 69 | 86 | 45% | 2471 | 10% |
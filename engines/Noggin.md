# Engine: Noggin

Author: Jeremy Lim

Home: https://github.com/jeremyylimmm/noggin

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1 | 2026-07-04 | 2557<sub>(+39) | 2892<sub>(+38) | 2966<sub>(+46) |  |
| 2.0 | 2026-06-14 | 2518 | 2854 | 2920 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1 | 2026-07-04 | 2542<sub>(+98) | 2843<sub>(+86) | 2948<sub>(+102) |  |
| 2.0 | 2026-06-14 | 2444 | 2757 | 2846 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1 | 2026-07-04 | 2642<sub>(+36) | 2893<sub>(+55) | 2948<sub>(+6) |  |
| 2.0 | 2026-06-14 | 2606 | 2838 | 2942 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Noggin+<version>&body=###%20Engine%20name%0ANoggin%0A%0A###%20Version%0A2.1" target="_blank">Submit new version</a>

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

Generated: 2026-11-21 05:40:34

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "2.1"]
  y-axis "Elo Rating" 2400 --> 3000
  line "E1: STC (8.0+0.08s)" [2518, 2557]
  line "E1: LTC (60.0+0.60s)" [2854, 2892]
  line "E1: VLTC (2m24s+1.12s)" [2920, 2966]
  line "P1: STC (8.0+0.08s)" [2444, 2542]
  line "P1: LTC (60.0+0.60s)" [2757, 2843]
  line "P1: VLTC (2m24s+1.12s)" [2846, 2948]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "2.1"]
  y-axis "Elo Rating" 2600 --> 3000
  line "T1: STC (8.0+0.08s)" [2606, 2642]
  line "T1: LTC (60.0+0.60s)" [2838, 2893]
  line "T1: VLTC (2m24s+1.12s)" [2942, 2948]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2948 | 34 | 260 | 52% | 2935 | 45% |
|  |  | P1 | 2948 | 47 | 136 | 49% | 2959 | 41% |
|  |  | E1 | 2966 | 33 | 308 | 55% | 2850 | 35% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2843 | 46 | 146 | 49% | 2855 | 43% |
|  |  | E1 | 2892 | 33 | 308 | 57% | 2739 | 36% |
|  |  | T1 | 2893 | 37 | 224 | 52% | 2878 | 43% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2542 | 50 | 140 | 48% | 2560 | 26% |
|  |  | E1 | 2557 | 39 | 236 | 48% | 2566 | 28% |
|  |  | T1 | 2642 | 39 | 220 | 48% | 2658 | 30% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2942 | 49 | 128 | 56% | 2894 | 41% |
|  |  | P1 | 2846 | 86 | 48 | 39% | 2942 | 31% |
|  |  | E1 | 2920 | 83 | 48 | 51% | 2857 | 40% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2838 | 56 | 92 | 51% | 2826 | 46% |
|  |  | P1 | 2757 | 96 | 42 | 56% | 2709 | 17% |
|  |  | E1 | 2854 | 80 | 54 | 50% | 2831 | 33% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2606 | 52 | 124 | 44% | 2661 | 31% |
|  |  | P1 | 2444 | 82 | 56 | 41% | 2506 | 25% |
|  |  | E1 | 2518 | 71 | 72 | 42% | 2651 | 32% |
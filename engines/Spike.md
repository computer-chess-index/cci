# Engine: Spike

Author: Volker Böhm, Ralf Schäfer

Home: https://github.com/Mangar2/Spike

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4.2 | 2026-08-28 | 2296<sub>(+37) | 2711<sub>(+23) | 2874<sub>(+97) |  |
| 1.4 | 2011-02-01 | 2259 | 2688 | 2777 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4.2 | 2026-08-28 | 2300<sub>(+32) | 2705<sub>(+48) | 2777<sub>(+59) |  |
| 1.4 | 2011-02-01 | 2268 | 2657 | 2718 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4.2 | 2026-08-28 | 2403<sub>(+55) | 2722<sub>(-19) | 2843<sub>(+12) |  |
| 1.4 | 2011-02-01 | 2348 | 2741 | 2831 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Spike+<version>&body=###%20Engine%20name%0ASpike%0A%0A###%20Version%0A1.4.2" target="_blank">Submit new version</a>

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

Generated: 2026-11-28 05:43:25

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.4", "1.4.2"]
  y-axis "Elo Rating" 2200 --> 2900
  line "E1: STC (8.0+0.08s)" [2259, 2296]
  line "E1: LTC (60.0+0.60s)" [2688, 2711]
  line "E1: VLTC (2m24s+1.12s)" [2777, 2874]
  line "P1: STC (8.0+0.08s)" [2268, 2300]
  line "P1: LTC (60.0+0.60s)" [2657, 2705]
  line "P1: VLTC (2m24s+1.12s)" [2718, 2777]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.4", "1.4.2"]
  y-axis "Elo Rating" 2300 --> 2900
  line "T1: STC (8.0+0.08s)" [2348, 2403]
  line "T1: LTC (60.0+0.60s)" [2741, 2722]
  line "T1: VLTC (2m24s+1.12s)" [2831, 2843]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.4.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2777 | 32 | 326 | 46% | 2823 | 30% |
|  |  | E1 | 2874 | 27 | 442 | 51% | 2862 | 33% |
|  |  | T1 | 2843 | 35 | 258 | 51% | 2839 | 35% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2711 | 28 | 440 | 46% | 2754 | 31% |
|  |  | T1 | 2722 | 34 | 282 | 51% | 2718 | 29% |
|  |  | P1 | 2705 | 32 | 320 | 50% | 2705 | 32% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2296 | 29 | 438 | 48% | 2306 | 24% |
|  |  | T1 | 2403 | 35 | 276 | 51% | 2395 | 30% |
|  |  | P1 | 2300 | 36 | 264 | 48% | 2322 | 27% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.4 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2831 | 45 | 164 | 51% | 2830 | 32% |
|  |  | P1 | 2718 | 58 | 104 | 52% | 2661 | 28% |
|  |  | E1 | 2777 | 49 | 144 | 51% | 2739 | 29% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2657 | 60 | 108 | 55% | 2525 | 19% |
|  |  | T1 | 2741 | 48 | 144 | 50% | 2738 | 27% |
|  |  | E1 | 2688 | 45 | 180 | 54% | 2599 | 24% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2268 | 54 | 136 | 43% | 2282 | 26% |
|  |  | T1 | 2348 | 32 | 404 | 45% | 2417 | 23% |
|  |  | E1 | 2259 | 54 | 136 | 51% | 2217 | 16% |
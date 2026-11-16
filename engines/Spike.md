# Engine: Spike

Author: Volker Böhm, Ralf Schäfer

Home: https://github.com/Mangar2/Spike

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4.2 | 2026-08-28 | 2304<sub>(+48) | 2716<sub>(+54) | 2892<sub>(+89) |  |
| 1.4 | 2011-02-01 | 2256 | 2662 | 2803 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4.2 | 2026-08-28 | 2265<sub>(-49) | 2664<sub>(+53) | 2734<sub>(+58) |  |
| 1.4 | 2011-02-01 | 2314 | 2611 | 2676 |  |
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

Generated: 2026-11-16 05:43:07

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.4", "1.4.2"]
  y-axis "Elo Rating" 2200 --> 2900
  line "E1: STC (8.0+0.08s)" [2256, 2304]
  line "E1: LTC (60.0+0.60s)" [2662, 2716]
  line "E1: VLTC (2m24s+1.12s)" [2803, 2892]
  line "P1: STC (8.0+0.08s)" [2314, 2265]
  line "P1: LTC (60.0+0.60s)" [2611, 2664]
  line "P1: VLTC (2m24s+1.12s)" [2676, 2734]
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
| 1.4.2 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2843 | 35 | 258 | 51% | 2839 | 35% |
|  |  | P1 | 2734 | 34 | 290 | 45% | 2786 | 32% |
|  |  | E1 | 2892 | 29 | 402 | 52% | 2866 | 34% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2722 | 34 | 282 | 51% | 2718 | 29% |
|  |  | P1 | 2664 | 33 | 300 | 50% | 2669 | 31% |
|  |  | E1 | 2716 | 29 | 388 | 46% | 2757 | 32% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2265 | 37 | 248 | 48% | 2290 | 27% |
|  |  | E1 | 2304 | 29 | 426 | 49% | 2306 | 24% |
|  |  | T1 | 2403 | 35 | 276 | 51% | 2395 | 30% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.4 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2831 | 45 | 164 | 51% | 2830 | 32% |
|  |  | P1 | 2676 | 72 | 68 | 53% | 2600 | 29% |
|  |  | E1 | 2803 | 68 | 80 | 54% | 2701 | 26% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2741 | 48 | 144 | 50% | 2738 | 27% |
|  |  | P1 | 2611 | 83 | 60 | 58% | 2385 | 18% |
|  |  | E1 | 2662 | 62 | 96 | 55% | 2523 | 24% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2314 | 77 | 72 | 47% | 2223 | 25% |
|  |  | T1 | 2348 | 32 | 404 | 45% | 2417 | 23% |
|  |  | E1 | 2256 | 62 | 100 | 52% | 2198 | 18% |
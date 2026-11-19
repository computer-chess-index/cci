# Engine: Spike

Author: Volker Böhm, Ralf Schäfer

Home: https://github.com/Mangar2/Spike

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4.2 | 2026-08-28 | 2296<sub>(+35) | 2709<sub>(+32) | 2885<sub>(+89) |  |
| 1.4 | 2011-02-01 | 2261 | 2677 | 2796 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4.2 | 2026-08-28 | 2277<sub>(-25) | 2677<sub>(+74) | 2743<sub>(+77) |  |
| 1.4 | 2011-02-01 | 2302 | 2603 | 2666 |  |
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

Generated: 2026-11-19 05:43:34

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.4", "1.4.2"]
  y-axis "Elo Rating" 2200 --> 2900
  line "E1: STC (8.0+0.08s)" [2261, 2296]
  line "E1: LTC (60.0+0.60s)" [2677, 2709]
  line "E1: VLTC (2m24s+1.12s)" [2796, 2885]
  line "P1: STC (8.0+0.08s)" [2302, 2277]
  line "P1: LTC (60.0+0.60s)" [2603, 2677]
  line "P1: VLTC (2m24s+1.12s)" [2666, 2743]
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
| 1.4.2 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2885 | 28 | 414 | 52% | 2863 | 34% |
|  |  | T1 | 2843 | 35 | 258 | 51% | 2839 | 35% |
|  |  | P1 | 2743 | 33 | 314 | 45% | 2795 | 31% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2709 | 29 | 392 | 46% | 2750 | 32% |
|  |  | T1 | 2722 | 34 | 282 | 51% | 2718 | 29% |
|  |  | P1 | 2677 | 33 | 304 | 50% | 2678 | 32% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2403 | 35 | 276 | 51% | 2395 | 30% |
|  |  | P1 | 2277 | 37 | 252 | 48% | 2302 | 28% |
|  |  | E1 | 2296 | 29 | 430 | 48% | 2303 | 24% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.4 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2831 | 45 | 164 | 51% | 2830 | 32% |
|  |  | P1 | 2666 | 65 | 84 | 51% | 2620 | 27% |
|  |  | E1 | 2796 | 62 | 96 | 53% | 2718 | 23% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2741 | 48 | 144 | 50% | 2738 | 27% |
|  |  | P1 | 2603 | 74 | 72 | 55% | 2429 | 21% |
|  |  | E1 | 2677 | 56 | 120 | 55% | 2556 | 21% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2348 | 32 | 404 | 45% | 2417 | 23% |
|  |  | P1 | 2302 | 68 | 88 | 45% | 2250 | 27% |
|  |  | E1 | 2261 | 58 | 116 | 52% | 2206 | 18% |
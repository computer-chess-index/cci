# Engine: Spike

Author: Volker Böhm, Ralf Schäfer

Home: https://github.com/Mangar2/Spike

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4.2 | 2026-08-28 | 2292<sub>(+32) | 2711<sub>(+33) | 2880<sub>(+84) |  |
| 1.4 | 2011-02-01 | 2260 | 2678 | 2796 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4.2 | 2026-08-28 | 2284<sub>(0) | 2693<sub>(+51) | 2762<sub>(+58) |  |
| 1.4 | 2011-02-01 | 2284 | 2642 | 2704 |  |
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

Generated: 2026-11-23 05:43:14

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.4", "1.4.2"]
  y-axis "Elo Rating" 2200 --> 2900
  line "E1: STC (8.0+0.08s)" [2260, 2292]
  line "E1: LTC (60.0+0.60s)" [2678, 2711]
  line "E1: VLTC (2m24s+1.12s)" [2796, 2880]
  line "P1: STC (8.0+0.08s)" [2284, 2284]
  line "P1: LTC (60.0+0.60s)" [2642, 2693]
  line "P1: VLTC (2m24s+1.12s)" [2704, 2762]
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
|  |  | P1 | 2762 | 33 | 318 | 45% | 2812 | 31% |
|  |  | E1 | 2880 | 28 | 426 | 51% | 2865 | 34% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2693 | 33 | 308 | 50% | 2695 | 31% |
|  |  | E1 | 2711 | 29 | 400 | 46% | 2751 | 31% |
|  |  | T1 | 2722 | 34 | 282 | 51% | 2718 | 29% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2284 | 36 | 260 | 48% | 2309 | 27% |
|  |  | E1 | 2292 | 29 | 438 | 48% | 2303 | 24% |
|  |  | T1 | 2403 | 35 | 276 | 51% | 2395 | 30% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.4 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2831 | 45 | 164 | 51% | 2830 | 32% |
|  |  | P1 | 2704 | 58 | 104 | 52% | 2647 | 28% |
|  |  | E1 | 2796 | 62 | 96 | 53% | 2718 | 23% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2741 | 48 | 144 | 50% | 2738 | 27% |
|  |  | P1 | 2642 | 68 | 84 | 56% | 2473 | 19% |
|  |  | E1 | 2678 | 56 | 120 | 55% | 2557 | 21% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2348 | 32 | 404 | 45% | 2417 | 23% |
|  |  | P1 | 2284 | 59 | 116 | 44% | 2271 | 25% |
|  |  | E1 | 2260 | 58 | 116 | 52% | 2206 | 18% |
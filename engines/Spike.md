# Engine: Spike

Author: Volker Böhm, Ralf Schäfer

Home: https://github.com/Mangar2/Spike

## Elo Ratings E1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4.2 | 2026-08-28 | 2198 | 2649 | 2795 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4.2 | 2026-08-28 | 2421 | 2838 | 2985 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1

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

Generated: 2026-10-09 14:16:51

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.4", "1.4.2"]
  y-axis "Elo Rating" 2300 --> 2900
  line "" [2348, 2403]
  line "STC (8.0+0.08s)" [2348, 2403]
  line "LTC (60.0+0.60s)" [2741, 2722]
  line "" [2831, 2843]
  line "VLTC (2m24s+1.12s)" [2831, 2843]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2985 | 43 | 172 | 50% | 2988 | 37% |
| 1.4.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2795 | 37 | 232 | 51% | 2786 | 35% |
| 1.4.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2843 | 35 | 258 | 51% | 2839 | 35% |
| 1.4.2 | LTC <sub>(60.0+0.60s)</sub> | 2649 | 35 | 264 | 47% | 2681 | 30% |
| 1.4.2 | LTC <sub>(60.0+0.60s)</sub> | 2722 | 34 | 282 | 51% | 2718 | 29% |
| 1.4.2 | LTC <sub>(60.0+0.60s)</sub> | 2838 | 42 | 186 | 49% | 2849 | 30% |
| 1.4.2 | STC <sub>(8.0+0.08s)</sub> | 2198 | 39 | 236 | 44% | 2250 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.2 | STC <sub>(8.0+0.08s)</sub> | 2403 | 35 | 276 | 51% | 2395 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.2 | STC <sub>(8.0+0.08s)</sub> | 2421 | 45 | 160 | 46% | 2461 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4 | VLTC <sub>(2m24s+1.12s)</sub> | 2831 | 45 | 164 | 51% | 2830 | 32% |
| 1.4 | LTC <sub>(60.0+0.60s)</sub> | 2741 | 48 | 144 | 50% | 2738 | 27% |
| 1.4 | STC <sub>(8.0+0.08s)</sub> | 2348 | 32 | 404 | 45% | 2417 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
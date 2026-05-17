# Engine: Gyatso

Author: Gyatso Neesham

Home: https://github.com/GyatsoYT/GyatsoChess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.0 | 2026-03-30 | 2549<sub>(+375) | 2871<sub>(+382) | 2974<sub>(+400) |  |
| 1.2.0 | 2026-01-24 | 2174<sub>(+171) | 2489<sub>(+122) | 2574<sub>(+117) |  |
| 1.1.0 | 2026-01-09 | 2003<sub>(+new) | 2367<sub>(+new) | 2457<sub>(+new) |  |
| 1.0.0 | 2025-12-10 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Gyatso+<version>&body=###%20Engine%20name%0AGyatso%0A%0A###%20Version%0A1.3.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-17 06:24:45

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1.0", "1.2.0", "1.3.0"]
  y-axis "Elo Rating" 2000 --> 3000
  line "STC (8.0+0.08s)" [2003, 2174, 2549]
  line "STC (8.0+0.08s)" [2003, 2174, 2549]
  line "LTC (60.0+0.60s)" [2367, 2489, 2871]
  line "VLTC (2m24s+1.12s)" [2457, 2574, 2974]
  line "VLTC (2m24s+1.12s)" [2457, 2574, 2974]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2974 | 25 | 480 | 47% | 2996 | 38% |
| 1.3.0 | LTC <sub>(60.0+0.60s)</sub> | 2871 | 30 | 354 | 50% | 2863 | 39% |
| 1.3.0 | STC <sub>(8.0+0.08s)</sub> | 2549 | 25 | 552 | 42% | 2618 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2574 | 33 | 312 | 52% | 2554 | 24% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2489 | 35 | 274 | 51% | 2477 | 27% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 2174 | 33 | 328 | 52% | 2155 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2457 | 45 | 172 | 49% | 2472 | 23% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2367 | 43 | 208 | 50% | 2367 | 16% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 2003 | 49 | 148 | 49% | 2018 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
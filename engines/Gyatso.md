# Engine: Gyatso

Author: Gyatso Neesham

Home: https://github.com/GyatsoYT/GyatsoChess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.0 | 2026-03-30 | 2480<sub>(+358) | 2808<sub>(+378) | 2911<sub>(+397) |  |
| 1.2.0 | 2026-01-24 | 2122<sub>(+162) | 2430<sub>(+120) | 2514<sub>(+116) |  |
| 1.1.0 | 2026-01-09 | 1960<sub>(+new) | 2310<sub>(+new) | 2398<sub>(+new) |  |
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

Generated: 2026-05-21 06:24:50

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1.0", "1.2.0", "1.3.0"]
  y-axis "Elo Rating" 1900 --> 3000
  line "STC (8.0+0.08s)" [1960, 2122, 2480]
  line "STC (8.0+0.08s)" [1960, 2122, 2480]
  line "LTC (60.0+0.60s)" [2310, 2430, 2808]
  line "VLTC (2m24s+1.12s)" [2398, 2514, 2911]
  line "VLTC (2m24s+1.12s)" [2398, 2514, 2911]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2911 | 25 | 484 | 47% | 2932 | 38% |
| 1.3.0 | LTC <sub>(60.0+0.60s)</sub> | 2808 | 30 | 354 | 50% | 2800 | 39% |
| 1.3.0 | STC <sub>(8.0+0.08s)</sub> | 2480 | 25 | 568 | 42% | 2545 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2514 | 33 | 312 | 52% | 2493 | 24% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2430 | 35 | 274 | 51% | 2418 | 27% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 2122 | 33 | 328 | 52% | 2103 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2398 | 45 | 172 | 49% | 2412 | 23% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2310 | 43 | 208 | 50% | 2309 | 16% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 1960 | 49 | 148 | 49% | 1975 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
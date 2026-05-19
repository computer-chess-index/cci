# Engine: Gyatso

Author: Gyatso Neesham

Home: https://github.com/GyatsoYT/GyatsoChess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.0 | 2026-03-30 | 2495<sub>(+359) | 2824<sub>(+379) | 2927<sub>(+398) |  |
| 1.2.0 | 2026-01-24 | 2136<sub>(+162) | 2445<sub>(+120) | 2529<sub>(+117) |  |
| 1.1.0 | 2026-01-09 | 1974<sub>(+new) | 2325<sub>(+new) | 2412<sub>(+new) |  |
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

Generated: 2026-05-19 06:25:15

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1.0", "1.2.0", "1.3.0"]
  y-axis "Elo Rating" 1900 --> 3000
  line "STC (8.0+0.08s)" [1974, 2136, 2495]
  line "STC (8.0+0.08s)" [1974, 2136, 2495]
  line "LTC (60.0+0.60s)" [2325, 2445, 2824]
  line "VLTC (2m24s+1.12s)" [2412, 2529, 2927]
  line "VLTC (2m24s+1.12s)" [2412, 2529, 2927]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2927 | 25 | 484 | 47% | 2948 | 38% |
| 1.3.0 | LTC <sub>(60.0+0.60s)</sub> | 2824 | 30 | 354 | 50% | 2816 | 39% |
| 1.3.0 | STC <sub>(8.0+0.08s)</sub> | 2495 | 25 | 568 | 42% | 2561 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2529 | 33 | 312 | 52% | 2508 | 24% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2445 | 35 | 274 | 51% | 2433 | 27% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 2136 | 33 | 328 | 52% | 2118 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2412 | 45 | 172 | 49% | 2427 | 23% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2325 | 43 | 208 | 50% | 2325 | 16% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 1974 | 49 | 148 | 49% | 1989 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
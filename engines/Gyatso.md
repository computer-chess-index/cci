# Engine: Gyatso

Author: Gyatso Neesham

Home: https://github.com/GyatsoYT/GyatsoChess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5.0 | 2026-08-02 |  |  |  |  |
| 1.4.0 | 2026-06-05 | 2685<sub>(+205) | 3015<sub>(+208) | 3104<sub>(+193) |  |
| 1.3.0 | 2026-03-30 | 2480<sub>(+365) | 2807<sub>(+382) | 2911<sub>(+400) |  |
| 1.2.0 | 2026-01-24 | 2115<sub>(+163) | 2425<sub>(+122) | 2511<sub>(+119) |  |
| 1.1.0 | 2026-01-09 | 1952<sub>(+new) | 2303<sub>(+new) | 2392<sub>(+new) |  |
| 1.0.0 | 2025-12-10 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Gyatso+<version>&body=###%20Engine%20name%0AGyatso%0A%0A###%20Version%0A1.5.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-05 06:26:00

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1.0", "1.2.0", "1.3.0", "1.4.0"]
  y-axis "Elo Rating" 1900 --> 3200
  line "STC (8.0+0.08s)" [1952, 2115, 2480, 2685]
  line "STC (8.0+0.08s)" [1952, 2115, 2480, 2685]
  line "LTC (60.0+0.60s)" [2303, 2425, 2807, 3015]
  line "VLTC (2m24s+1.12s)" [2392, 2511, 2911, 3104]
  line "VLTC (2m24s+1.12s)" [2392, 2511, 2911, 3104]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3104 | 30 | 320 | 50% | 3102 | 47% |
| 1.4.0 | LTC <sub>(60.0+0.60s)</sub> | 3015 | 31 | 312 | 51% | 3009 | 44% |
| 1.4.0 | STC <sub>(8.0+0.08s)</sub> | 2685 | 31 | 336 | 50% | 2688 | 32% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2911 | 25 | 492 | 47% | 2934 | 39% |
| 1.3.0 | LTC <sub>(60.0+0.60s)</sub> | 2807 | 30 | 358 | 50% | 2800 | 39% |
| 1.3.0 | STC <sub>(8.0+0.08s)</sub> | 2480 | 25 | 576 | 43% | 2539 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2511 | 33 | 312 | 52% | 2489 | 24% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2425 | 35 | 274 | 51% | 2412 | 27% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 2115 | 33 | 328 | 52% | 2097 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2392 | 45 | 172 | 49% | 2407 | 23% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2303 | 43 | 208 | 50% | 2303 | 16% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 1952 | 49 | 148 | 49% | 1967 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
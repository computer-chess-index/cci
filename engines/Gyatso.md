# Engine: Gyatso

Author: Gyatso Neesham

Home: https://github.com/GyatsoYT/GyatsoChess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5.0 | 2026-08-02 |  |  |  |  |
| 1.4.0 | 2026-06-05 | 2685<sub>(+204) | 3020<sub>(+212) | 3105<sub>(+193) |  |
| 1.3.0 | 2026-03-30 | 2481<sub>(+364) | 2808<sub>(+382) | 2912<sub>(+400) |  |
| 1.2.0 | 2026-01-24 | 2117<sub>(+164) | 2426<sub>(+122) | 2512<sub>(+118) |  |
| 1.1.0 | 2026-01-09 | 1953<sub>(+new) | 2304<sub>(+new) | 2394<sub>(+new) |  |
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

Generated: 2026-08-10 07:02:33

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1.0", "1.2.0", "1.3.0", "1.4.0"]
  y-axis "Elo Rating" 1900 --> 3200
  line "STC (8.0+0.08s)" [1953, 2117, 2481, 2685]
  line "STC (8.0+0.08s)" [1953, 2117, 2481, 2685]
  line "LTC (60.0+0.60s)" [2304, 2426, 2808, 3020]
  line "VLTC (2m24s+1.12s)" [2394, 2512, 2912, 3105]
  line "VLTC (2m24s+1.12s)" [2394, 2512, 2912, 3105]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3105 | 30 | 324 | 50% | 3104 | 47% |
| 1.4.0 | LTC <sub>(60.0+0.60s)</sub> | 3020 | 31 | 316 | 51% | 3011 | 44% |
| 1.4.0 | STC <sub>(8.0+0.08s)</sub> | 2685 | 31 | 344 | 49% | 2691 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2912 | 25 | 492 | 47% | 2935 | 39% |
| 1.3.0 | LTC <sub>(60.0+0.60s)</sub> | 2808 | 30 | 358 | 50% | 2801 | 39% |
| 1.3.0 | STC <sub>(8.0+0.08s)</sub> | 2481 | 25 | 576 | 43% | 2542 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2512 | 33 | 312 | 52% | 2491 | 24% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2426 | 35 | 274 | 51% | 2414 | 27% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 2117 | 33 | 328 | 52% | 2098 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2394 | 45 | 172 | 49% | 2408 | 23% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2304 | 43 | 208 | 50% | 2304 | 16% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 1953 | 49 | 148 | 49% | 1968 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
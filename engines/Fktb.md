# Engine: Fktb

Author: Landon Peng

Home: https://github.com/lunbun/fktb

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.0.77 | 2026-01-18 | 1895<sub>(-54) | 2199<sub>(+19) | 2269<sub>(+9) |  |
| 0.0.76 | 2026-01-05 | 1949 | 2180 | 2260 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Fktb+<version>&body=###%20Engine%20name%0AFktb%0A%0A###%20Version%0A0.0.77" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-05 06:24:16

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.0.76", "0.0.77"]
  y-axis "Elo Rating" 1800 --> 2300
  line "STC (8.0+0.08s)" [1949, 1895]
  line "STC (8.0+0.08s)" [1949, 1895]
  line "LTC (60.0+0.60s)" [2180, 2199]
  line "VLTC (2m24s+1.12s)" [2260, 2269]
  line "VLTC (2m24s+1.12s)" [2260, 2269]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.0.77 | VLTC <sub>(2m24s+1.12s)</sub> | 2269 | 26 | 468 | 52% | 2253 | 32% |
| 0.0.77 | LTC <sub>(60.0+0.60s)</sub> | 2199 | 28 | 436 | 50% | 2196 | 30% |
| 0.0.77 | STC <sub>(8.0+0.08s)</sub> | 1895 | 26 | 524 | 48% | 1912 | 27% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.0.76 | VLTC <sub>(2m24s+1.12s)</sub> | 2260 | 52 | 132 | 48% | 2287 | 22% |
| 0.0.76 | LTC <sub>(60.0+0.60s)</sub> | 2180 | 45 | 172 | 49% | 2191 | 23% |
| 0.0.76 | STC <sub>(8.0+0.08s)</sub> | 1949 | 49 | 140 | 48% | 1967 | 27% |
| --- | --- | --- | --- | --- | --- | --- | --- |
# Engine: Scoria

Author: Ian Nathan Kusmiantoro

Home: https://github.com/iannathan-k/scoria

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.4.7 | 2026-08-10 | 2303<sub>(+1061) | 2523<sub>(+1007) | 2703<sub>(+1061) |  |
| 3.8.51 | 2025-08-10 | 1242 | 1516 | 1642 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Scoria+<version>&body=###%20Engine%20name%0AScoria%0A%0A###%20Version%0A4.4.7" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-12 08:13:09

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.8.51", "4.4.7"]
  y-axis "Elo Rating" 1200 --> 2800
  line "STC (8.0+0.08s)" [1242, 2303]
  line "STC (8.0+0.08s)" [1242, 2303]
  line "LTC (60.0+0.60s)" [1516, 2523]
  line "VLTC (2m24s+1.12s)" [1642, 2703]
  line "VLTC (2m24s+1.12s)" [1642, 2703]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.4.7 | VLTC <sub>(2m24s+1.12s)</sub> | 2703 | 61 | 100 | 57% | 2581 | 26% |
| 4.4.7 | LTC <sub>(60.0+0.60s)</sub> | 2523 | 53 | 136 | 64% | 2349 | 27% |
| 4.4.7 | STC <sub>(8.0+0.08s)</sub> | 2303 | 64 | 90 | 63% | 2106 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.8.51 | VLTC <sub>(2m24s+1.12s)</sub> | 1642 | 24 | 554 | 45% | 1710 | 42% |
| 3.8.51 | LTC <sub>(60.0+0.60s)</sub> | 1516 | 26 | 498 | 49% | 1553 | 38% |
| 3.8.51 | STC <sub>(8.0+0.08s)</sub> | 1242 | 25 | 576 | 54% | 1181 | 34% |
| --- | --- | --- | --- | --- | --- | --- | --- |
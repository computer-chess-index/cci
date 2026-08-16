# Engine: Scoria

Author: Ian Nathan Kusmiantoro

Home: https://github.com/iannathan-k/scoria

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.4.7 | 2026-08-10 | 2304<sub>(+1061) | 2515<sub>(+998) | 2651<sub>(+1009) |  |
| 3.8.51 | 2025-08-10 | 1243 | 1517 | 1642 |  |
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

Generated: 2026-08-16 06:29:04

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.8.51", "4.4.7"]
  y-axis "Elo Rating" 1200 --> 2700
  line "STC (8.0+0.08s)" [1243, 2304]
  line "STC (8.0+0.08s)" [1243, 2304]
  line "LTC (60.0+0.60s)" [1517, 2515]
  line "VLTC (2m24s+1.12s)" [1642, 2651]
  line "VLTC (2m24s+1.12s)" [1642, 2651]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.4.7 | VLTC <sub>(2m24s+1.12s)</sub> | 2651 | 41 | 196 | 50% | 2624 | 32% |
| 4.4.7 | LTC <sub>(60.0+0.60s)</sub> | 2515 | 46 | 172 | 60% | 2385 | 30% |
| 4.4.7 | STC <sub>(8.0+0.08s)</sub> | 2304 | 47 | 160 | 56% | 2201 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.8.51 | VLTC <sub>(2m24s+1.12s)</sub> | 1642 | 24 | 554 | 45% | 1712 | 42% |
| 3.8.51 | LTC <sub>(60.0+0.60s)</sub> | 1517 | 26 | 498 | 49% | 1554 | 38% |
| 3.8.51 | STC <sub>(8.0+0.08s)</sub> | 1243 | 25 | 576 | 54% | 1183 | 34% |
| --- | --- | --- | --- | --- | --- | --- | --- |
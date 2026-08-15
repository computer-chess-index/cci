# Engine: Scoria

Author: Ian Nathan Kusmiantoro

Home: https://github.com/iannathan-k/scoria

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.4.7 | 2026-08-10 | 2300<sub>(+1058) | 2507<sub>(+990) | 2660<sub>(+1018) |  |
| 3.8.51 | 2025-08-10 | 1242 | 1517 | 1642 |  |
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

Generated: 2026-08-15 06:29:00

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.8.51", "4.4.7"]
  y-axis "Elo Rating" 1200 --> 2700
  line "STC (8.0+0.08s)" [1242, 2300]
  line "STC (8.0+0.08s)" [1242, 2300]
  line "LTC (60.0+0.60s)" [1517, 2507]
  line "VLTC (2m24s+1.12s)" [1642, 2660]
  line "VLTC (2m24s+1.12s)" [1642, 2660]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.4.7 | VLTC <sub>(2m24s+1.12s)</sub> | 2660 | 45 | 166 | 51% | 2620 | 33% |
| 4.4.7 | LTC <sub>(60.0+0.60s)</sub> | 2507 | 47 | 164 | 60% | 2377 | 29% |
| 4.4.7 | STC <sub>(8.0+0.08s)</sub> | 2300 | 48 | 156 | 56% | 2198 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.8.51 | VLTC <sub>(2m24s+1.12s)</sub> | 1642 | 24 | 554 | 45% | 1710 | 42% |
| 3.8.51 | LTC <sub>(60.0+0.60s)</sub> | 1517 | 26 | 498 | 49% | 1553 | 38% |
| 3.8.51 | STC <sub>(8.0+0.08s)</sub> | 1242 | 25 | 576 | 54% | 1181 | 34% |
| --- | --- | --- | --- | --- | --- | --- | --- |
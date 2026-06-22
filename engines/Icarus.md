# Engine: Icarus

Author: 

Home: https://github.com/Sp00ph/icarus

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1 | 2026-06-05 | 3324<sub>(+26) | 3475<sub>(+34) | 3517<sub>(+30) |  |
| 1.0 | 2026-04-26 | 3298 | 3441 | 3487 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Icarus+<version>&body=###%20Engine%20name%0AIcarus%0A%0A###%20Version%0A1.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-06-22 06:25:38

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.1"]
  y-axis "Elo Rating" 3200 --> 3600
  line "STC (8.0+0.08s)" [3298, 3324]
  line "STC (8.0+0.08s)" [3298, 3324]
  line "LTC (60.0+0.60s)" [3441, 3475]
  line "VLTC (2m24s+1.12s)" [3487, 3517]
  line "VLTC (2m24s+1.12s)" [3487, 3517]
```

```mermaid
%%{init: {"theme":"base"}}%%
flowchart LR
E[ ] --- A[STC 8.0+0.08s]
A --- B[LTC 60.0+0.60s]
B --- C[VLTC 2m24s+1.12s]
C --- D[ ]
linkStyle 0 stroke:#a3a3a3,stroke-width:0px
linkStyle 1 stroke:#a3a3a3,stroke-width:4px
linkStyle 2 stroke:#faa371,stroke-width:4px
linkStyle 3 stroke:#4ef781,stroke-width:4px
style A fill:none,stroke:none
style B fill:none,stroke:none
style C fill:none,stroke:none
style D fill:none,stroke:none
style E fill:none,stroke:none
```


## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.1"]
  y-axis "Elo Rating" 3200 --> 3600
  line "STC (8.0+0.08s)" [3298, 3324]
  line "STC (8.0+0.08s)" [3298, 3324]
  line "LTC (60.0+0.60s)" [3441, 3475]
  line "VLTC (2m24s+1.12s)" [3487, 3517]
  line "VLTC (2m24s+1.12s)" [3487, 3517]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3517 | 31 | 244 | 50% | 3515 | 86% |
| 1.1 | LTC <sub>(60.0+0.60s)</sub> | 3475 | 28 | 296 | 52% | 3459 | 83% |
| 1.1 | STC <sub>(8.0+0.08s)</sub> | 3324 | 31 | 264 | 51% | 3317 | 74% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3487 | 27 | 334 | 50% | 3483 | 83% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 3441 | 26 | 338 | 51% | 3436 | 83% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 3298 | 27 | 348 | 51% | 3293 | 71% |
| --- | --- | --- | --- | --- | --- | --- | --- |
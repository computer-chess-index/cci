# Engine: Eleanor

Author: Mark Kasa

Home: https://github.com/rektdie/Eleanor

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.1 | 2026-04-21 | 3152<sub>(+38) | 3382<sub>(+19) | 3411<sub>(+24) |  |
| 4.0 | 2026-04-18 | 3114<sub>(+94) | 3363<sub>(+119) | 3387<sub>(+74) |  |
| 3.0 | 2025-12-05 | 3020<sub>(+new) | 3244<sub>(+new) | 3313<sub>(+new) |  |
| 2.0 | 2025-08-23 |  |  |  |  |
| 1.0 | 2025-06-02 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Eleanor+<version>&body=###%20Engine%20name%0AEleanor%0A%0A###%20Version%0A4.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-14 06:24:25

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0", "4.0", "4.1"]
  y-axis "Elo Rating" 3000 --> 3500
  line "STC (8.0+0.08s)" [3020, 3114, 3152]
  line "STC (8.0+0.08s)" [3020, 3114, 3152]
  line "LTC (60.0+0.60s)" [3244, 3363, 3382]
  line "VLTC (2m24s+1.12s)" [3313, 3387, 3411]
  line "VLTC (2m24s+1.12s)" [3313, 3387, 3411]
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
  x-axis ["3.0", "4.0", "4.1"]
  y-axis "Elo Rating" 3000 --> 3500
  line "STC (8.0+0.08s)" [3020, 3114, 3152]
  line "STC (8.0+0.08s)" [3020, 3114, 3152]
  line "LTC (60.0+0.60s)" [3244, 3363, 3382]
  line "VLTC (2m24s+1.12s)" [3313, 3387, 3411]
  line "VLTC (2m24s+1.12s)" [3313, 3387, 3411]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3411 | 24 | 404 | 49% | 3417 | 82% |
| 4.1 | LTC <sub>(60.0+0.60s)</sub> | 3382 | 26 | 358 | 49% | 3386 | 77% |
| 4.1 | STC <sub>(8.0+0.08s)</sub> | 3152 | 28 | 352 | 51% | 3146 | 61% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3387 | 29 | 284 | 50% | 3387 | 81% |
| 4.0 | LTC <sub>(60.0+0.60s)</sub> | 3363 | 30 | 280 | 50% | 3360 | 76% |
| 4.0 | STC <sub>(8.0+0.08s)</sub> | 3114 | 32 | 264 | 50% | 3112 | 63% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3313 | 26 | 368 | 50% | 3314 | 68% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 3244 | 27 | 358 | 52% | 3216 | 71% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 3020 | 24 | 496 | 52% | 2992 | 50% |
| --- | --- | --- | --- | --- | --- | --- | --- |